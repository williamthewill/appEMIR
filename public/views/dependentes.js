/*global DependentesController*/
/*eslint no-unused-vars: */

function realizarCadastro() {
	let nome = document.querySelector('#InputName').value;
	let filiacao = document.querySelector('#InputFiliacao').value;

	let dependenteController = new DependentesController();
	
	dependenteController.salvarDepenente(nome, filiacao).then(function(){
		window.location = './main-app.html';
	}).catch(function(){
		throw 'Os dados informados não correspondem';
	});
}

function listarDependentes() {
	let tbody = document.querySelector('.table tbody');
	let dependenteController = new DependentesController();
	dependenteController.listarDependentes().then(function(arrDependentes){
		if(typeof arrDependentes === 'object') {
			for(var i = 0; i < arrDependentes.length; i++) {
				let htmlDpenendente = document.createElement('tr');
				htmlDpenendente.innerHTML = '<td>'+arrDependentes[i].nome+'</td><td>'+arrDependentes[i].filiacao+'</td>'+'<td> <button type="button" onclick="remover('+`'${arrDependentes[i].nome}'`+')">Remover</button> </td>';
				tbody.appendChild(htmlDpenendente);
			}
		}
	});
}

function remover(nome) {
	let dependenteController = new DependentesController();
	dependenteController.deletarDependente(nome).then(() => window.location.reload());
}