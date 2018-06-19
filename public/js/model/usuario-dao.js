/*eslint no-unused-vars: */

class UsuarioDao {

	constructor(){
		this.client = new DatabaseConnetion().connection();
	}

	save(nome, email, login, senha) {
		const client = this.client
		const user = new Usuario(nome, email, login, senha);
		if(!window.localStorage) return;

		window.localStorage.usersList = window.localStorage.usersList || '[]';

		let usersList = JSON.parse(window.localStorage.usersList);
		usersList.push(user);
		window.localStorage.usersList = JSON.stringify(usersList);

		return new Promise(function(resolve) {
			client.transaction(function(tx) {
				let id = Math.floor(Date.now() / 1000);
				tx.executeSql(`INSERT INTO declarador (id, nome, email, login, senha) VALUES (${id}, "${nome}", "${email}", "${login}", "${senha}")`);
				resolve(true);
			})
		})
	}

	getUserByLogin(login, senha){
		let user = {};
		try {
			let arrUsers = JSON.parse(window.localStorage.usersList);
			user = arrUsers.filter((userSaved) => {
				if(userSaved.login === login && userSaved.senha === senha){
					return true;
				}
			})[0];
			
			if(!user) throw 'usuário não encontrado';
		} catch (error) {
			return error;
		}
		return user;
	}
}