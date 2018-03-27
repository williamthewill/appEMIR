/*global UsuarioController*/


function realizarCadastro() {
	var nome = document.querySelector('#InputName').value;
	var email = document.querySelector('#InputEmail').value;
	var login = document.querySelector('#InputLogin').value;
	var senha = document.querySelector('#InputSenha').value;
	var confSenha = document.querySelector('#InputConfSenha').value;

	var usuarioController = new UsuarioController();
	
	switch (usuarioController.salvarUsuario(nome, email, login, senha, confSenha)) {
	case true:
		window.location = '../../index.html';
		break;
	default:
		throw 'Os dados informados não correspondem';
	}
}