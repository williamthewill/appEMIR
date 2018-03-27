/*global DependentesController*/
/*eslint no-unused-vars: */

function realizarCadastro() {
	let nome = document.querySelector('#InputName').value;
	let filiacao = document.querySelector('#InputFiliacao').value;

	let dependenteController = new DependentesController();
	
	switch (dependenteController.salvarDepenente(nome, filiacao)) {
	case true:
		window.location = './main-app.html';
		break;
	default:
		throw 'Os dados informados não correspondem';
	}
}

function listarDependentes() {
	let tbody = document.querySelector('.table tbody');
	let dependenteController = new DependentesController();
	let arrDependentes = dependenteController.listarDependentes();
	if(typeof arrDependentes === 'object') {
		for(var i = 0; i < arrDependentes.length; i++) {
			let htmlDpenendente = document.createElement('tr');
			htmlDpenendente.innerHTML = '<td>'+arrDependentes[i].nome+'</td><td>'+arrDependentes[i].filiacao+'</td>';
			tbody.appendChild(htmlDpenendente);
		}
	}
}