/*eslint no-unused-vars: */
/* global DebitosController */

function calcularAliquota(receita){
	const porcentagemContribuicao = 0.06;
	
	let aliquota = receita*porcentagemContribuicao;

	return aliquota;
}

function impostoRenda(){}

function somaDeDebitos(listaDebitos) {
	let debitoTotal = 0;
	for(let i = 0; i < listaDebitos.length; i++) {
		debitoTotal += parseFloat(listaDebitos[i].valor);
	}
	return debitoTotal
}