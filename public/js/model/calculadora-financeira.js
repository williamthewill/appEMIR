/*eslint no-unused-vars: */
/* global DebitosController */

class CalculadoraFinanceira {
	constructor (){}
	
	calcularAliquota(receita){
		const porcentagemContribuicao = 0.06;
		
		let aliquota = receita*porcentagemContribuicao;
	
		return aliquota;
	}
	
	impostoRenda(aliquota, debitos){
		return aliquota+debitos
	}
	
	somaDeDebitos(listaDebitos) {
		let debitoTotal = 0;
		for(let i = 0; i < listaDebitos.length; i++) {
			debitoTotal += parseFloat(listaDebitos[i].valor);
		}
		return debitoTotal
	}
}