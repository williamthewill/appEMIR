/*global UsuarioController*/

function login (scope){
	const that = scope;
	const login = that.parentNode.querySelector('.login').value.trim();
	const senha = that.parentNode.querySelector('.password').value.trim();

	const usuarioController = new UsuarioController();
	const usuario = usuarioController.getUserByLogin(login, senha);
	if(usuario){
		usuarioController.setLoginSession(usuario);
		window.location = './public/views/main-app.html';
	}
}