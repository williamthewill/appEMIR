/*global UsuarioDao Usuario*/
/*eslint no-unused-vars: */
/*eslint-env es6*/

class UsuarioController {
	
	salvarUsuario(nome, email, login, senha, confSenha) {
		let usuarioDao = new UsuarioDao();
		if(arguments.length === 5) {
			if(
				nome.length > 3 &&
				email.match(/^[a-z0-9]+@[a-z]+.com.br|com$/) &&
				login.length > 3 &&
				senha.match(/[A-z0-9]+/) &&
				senha === confSenha
			) {
				return usuarioDao.save(nome, email, login, senha);
			}
		}

		return;
	}

	getUserByLogin(login, senha) {
		let usuarioDao = new UsuarioDao();
		if(login.length > 3 && senha.match(/[A-z0-9]+/)) {
			const usuario = usuarioDao.getUserByLogin(login, senha);
			return usuario;
		}
	}

	setLoginSession(user) {
		sessionStorage.setItem('usuarioLogado', user.nome);
	}

	setLogoutSession() {
		sessionStorage.removeItem('usuarioLogado');
		window.location = '../../index.html';
	}

	getUserSession() {
		return sessionStorage.getItem('usuarioLogado');
	}
}
