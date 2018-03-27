/*global Dependente DependentesDao UsuarioController*/
/*eslint no-unused-vars: */
/*eslint-env es6*/

class DependentesController {
	
	salvarDepenente(nome, filiacao) {
		let usuarioController = new UsuarioController();
		if(arguments.length === 2 && usuarioController.getUserSession()) {
			if(
				nome.length > 3 && filiacao.length >= 3
			) {
				const dependente = new Dependente(nome, filiacao);
				const dependenteDao = new DependentesDao();
				return dependenteDao.save(dependente);
			}
		}

		return;
	}

	listarDependentes() {
		let usuarioController = new UsuarioController();
		let userSession = usuarioController.getUserSession();
		if(userSession) {
			const dependenteDao = new DependentesDao();
			let arrDepenendetes = dependenteDao.getDependentes(userSession);
			return arrDepenendetes;
		}
	}
}
