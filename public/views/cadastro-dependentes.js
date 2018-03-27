/*global DependenteController*/
/*eslint no-unused-vars: */

function realizarCadastro() {
	var nome = document.querySelector('#InputName').value;
	var filiacao = document.querySelector('#InputFiliacao').value;

	var dependenteController = new DependenteController();
	
	switch (dependenteController.salvarDepenente(nome, filiacao)) {
	case true:
		window.location = './main-app.html';
		break;
	default:
		throw 'Os dados informados não correspondem';
	}
}