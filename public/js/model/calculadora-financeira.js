/*eslint no-unused-vars: */
/* global ContasController */

function calcularAliquota(){
	const porcentagemContribuicao = 0.06;
	let receita = parseFloat(document.querySelector('.aliquota').value);

	let aliquota = receita*porcentagemContribuicao;

	document.querySelector('.valor-aliquota').innerText = aliquota;
}

function impostoRenda(){}

function somaDeDebitos() {
	let contasController = new ContasController();

	contasController.listarContas().then(listaContas => {
		let debitoTotal = 0;
		for(let i = 0; i < listaContas.length; i++) {
			debitoTotal += parseFloat(listaContas[i].valor);
		}
		document.querySelector('.total-contas').innerText = `R$ ${debitoTotal} reais`;
	});
}