/*global UsuarioController DatabaseConnetion*/
/*eslint no-unused-vars: */


class DependentesDao {
	
	save(dependente) {
		const client = new DatabaseConnetion().connection();
		
		if(!window.localStorage) return;

		window.localStorage.usersList = window.localStorage.usersList || '[]';

		let usersList = JSON.parse(window.localStorage.usersList);
		const usuarioController = new UsuarioController();
		for(var i = 0; i < usersList.length; i++) {
			if(usersList[i].nome === usuarioController.getUserSession()) {
				usersList[i].dependentes.push(dependente);
				break;
			}
		}

		window.localStorage.usersList = JSON.stringify(usersList);
		
		return new Promise(function(resolve){
			client.transaction(function (tx) {
				let id = Math.floor(Date.now() / 1000);
				tx.executeSql(`INSERT INTO dependente (id, nome, filiacao) VALUES (${id}, "${dependente.nome}", "${dependente.filiacao}")`);
				resolve(true);
			});

		});
		
	}

	getDependentesByFiliacao(userLogado, filiacao){
		let arrUsers = JSON.parse(window.localStorage.usersList);
		try {
			arrUsers.forEach((userSaved) => {
				if(arrUsers[userSaved].nome === userLogado){
					let dependentes = arrUsers[userSaved].dependentes.filter(dependente => {
						if(dependente.filiacao === filiacao){
							return true;
						}
					});
					return dependentes;
				}
			});
			
			throw 'Sem filiação para o usuário logado';
		} catch (error) {
			return error;
		}
	}

	getDependentes(userLogado) {
		const client = new DatabaseConnetion().connection();
		let arrUsers = JSON.parse(window.localStorage.usersList);
		return new Promise(function(resolve){
			client.transaction(function (tx) {
				let id = Math.floor(Date.now() / 1000);
				tx.executeSql('SELECT * FROM dependente', [], function (tx, results) {
					let arrdependentes = results.rows;
					arrUsers.forEach((userSaved) => {
						if(userSaved.nome === userLogado){
							arrdependentes =  userSaved.dependentes;
						}
					});
					if(arrdependentes) {
						resolve(arrdependentes);
					} else {
						throw 'Sem filiação para o usuário logado';
					}
				}, null);
			});
		});
	}
}