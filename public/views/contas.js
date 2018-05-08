/* global ContasController */
/*eslint no-unused-vars: */

function realizarCadastro() {
	var nome = document.querySelector('#InputName').value;
	var valor = document.querySelector('#InputValor').value;
	var vencimento = document.querySelector('#InputVencimento').value;

	var contaController = new ContasController();
	
	contaController.salvarConta(nome, valor, vencimento).then(() => {
		window.location = './main-app.html';
	}).catch(() => {
		throw 'Os dados informados não correspondem';
	});
}

function listarContas() {
	let tbody = document.querySelector('.table tbody');
	let contasController = new ContasController();
	contasController.listarContas().then(function(arrContas){
		if(typeof arrContas === 'object') {
			for(var i = 0; i < arrContas.length; i++) {
				let htmlDpenendente = document.createElement('tr');
				htmlDpenendente.innerHTML = '<td>'+arrContas[i].nome+'</td><td>'+arrContas[i].valor+'</td><td>'+arrContas[i].vencimento+'</td>';
				tbody.appendChild(htmlDpenendente);
			}
		}
	});
}