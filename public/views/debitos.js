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
	debitosController.listarDebitosApi().then(function(arrDebitos){
		if(typeof arrDebitos === 'object') {
			for(var i = 0; i < arrDebitos.length; i++) {
				let htmlDpenendente = document.createElement('tr');
				htmlDpenendente.innerHTML = '<td>'+arrDebitos[i].name+'</td><td>'+arrDebitos[i].value+'</td><td>'+arrDebitos[i].payDate+'</td>';
				tbody.appendChild(htmlDpenendente);
			}
		}
	});
}