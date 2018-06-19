/*global UsuarioController*/
/*eslint no-unused-vars: */

function realizarCadastro() {
	var nome = document.querySelector('#InputName').value;
	var email = document.querySelector('#InputEmail').value;
	var login = document.querySelector('#InputLogin').value;
	var senha = document.querySelector('#InputSenha').value;
	var confSenha = document.querySelector('#InputConfSenha').value;

	var usuarioController = new UsuarioController();
	
	usuarioController.salvarUsuario(nome, email, login, senha, confSenha).then((res) => {
		if(res) {
			window.location = '../../index.html';
		} else {
			throw 'Os dados informados não correspondem';
		}
	});
}