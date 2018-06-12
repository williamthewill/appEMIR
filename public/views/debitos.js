/* global DebitosController */
/*eslint no-unused-vars: */

function realizarCadastro() {
	var nome = document.querySelector('#InputName').value;
	var valor = document.querySelector('#InputValor').value;
	var vencimento = document.querySelector('#InputVencimento').value;

	var debitosController = new DebitosController();
	
	debitosController.salvarDebito(nome, valor, vencimento).then(() => {
		window.location = './main-app.html';
	}).catch(() => {
		throw 'Os dados informados não correspondem';
	});
}

function listarDebitos() {
	let tbody = document.querySelector('.table tbody');
	let debitosController = new DebitosController();
	debitosController.listarDebitos().then(function(arrDebitos){
		if(typeof arrDebitos === 'object') {
			for(var i = 0; i < arrDebitos.length; i++) {
				let htmlDpenendente = document.createElement('tr');
				htmlDpenendente.innerHTML = '<td>'+arrDebitos[i].nome+'</td><td>'+arrDebitos[i].valor+'</td><td>'+arrDebitos[i].vencimento+'</td>';
				tbody.appendChild(htmlDpenendente);
			}
		}
	});
}