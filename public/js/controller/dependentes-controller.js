/*global Dependente DependentesDao UsuarioController*/
/*eslint-env es6*/

class DependenteController{
	
	salvarDepenente(nome, filiacao) {
		let usuarioController = new UsuarioController();
		if(arguments.length === 2 && usuarioController.getUserSession()){
			if(
				nome.length > 3 && filiacao.length >= 3
			){
				const dependente = new Dependente(nome, filiacao);
				const dependenteDao = new DependentesDao();
				return dependenteDao.save(dependente);
			}
		}

		return;
	}

	getUserByLogin(login, senha){
		let usuarioDao = new UsuarioDao();
		if(login.length > 3 && senha.match(/[A-z0-9]+/)){
			const usuario = usuarioDao.getUserByLogin(login, senha);
			return usuario;
		}
	}

	setLoginSession(user){
		sessionStorage.setItem('usuarioLogado', user.nome);
	}

	setLogoutSession(){
		sessionStorage.removeItem('usuarioLogado');
		window.location = '../../index.html';
	}
}
