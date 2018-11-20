/*global Dependente DependentesDao UsuarioController*/
/*eslint no-unused-vars: */
/*eslint-env es6*/

const axios = require('axios')

class DependentesController {
	
	salvarDepenente(nome, filiacao) {
		let usuarioController = new UsuarioController();
		if(arguments.length === 2 && usuarioController.getUserSession()) {
			if(
				nome.length > 3 && filiacao.length >= 3
			) {
				const dependenteDao = new DependentesDao();
				return dependenteDao.save(nome, filiacao).then(function(data){
					return data;
				});
			}
		}

		return;
	}

	listarDependentes() {
		let usuarioController = new UsuarioController();
		let userSession = usuarioController.getUserSession();
		if(userSession) {
			const dependenteDao = new DependentesDao();
			return dependenteDao.getDependentes(userSession).then(data => data);
		}
	}

	listarDependentesApi() {
		return new Promise(resolve => {
			axios.get('http://127.0.0.1:3000/user/dependents').then(dependentes => {
				resolve(dependentes.data)
			})
		})
	}

	deletarDependente(nome) {
		let usuarioController = new UsuarioController();
		let userSession = usuarioController.getUserSession();
		if(userSession) {
			const dependenteDao = new DependentesDao();
			return dependenteDao.deleteDependente(userSession, nome);
		}
	}
}
