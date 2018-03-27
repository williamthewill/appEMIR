/*eslint no-unused-vars: */

class UsuarioDao {

	save(user) {

		if(!window.localStorage) return;

		window.localStorage.usersList = window.localStorage.usersList || '[]';

		let usersList = JSON.parse(window.localStorage.usersList);
		usersList.push(user);
		window.localStorage.usersList = JSON.stringify(usersList);

		return true;
	}

	getUserByLogin(login, senha){
		let arrUsers = JSON.parse(window.localStorage.usersList);
		let user = {};
		try {
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