/*global UsuarioController*/
/*eslint no-unused-vars: */

class DependentesDao {

	save(dependente) {

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
		
		return true;
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

	getDependentes(userLogado){
		let arrUsers = JSON.parse(window.localStorage.usersList);
		try {
			let arrdependentes = [];
			arrUsers.forEach((userSaved) => {
				if(userSaved.nome === userLogado){
					arrdependentes =  userSaved.dependentes;
				}
			});
			if(arrdependentes) {
				return arrdependentes;
			} else {
				throw 'Sem filiação para o usuário logado';
			}
		} catch (error) {
			return error;
		}
	}
}