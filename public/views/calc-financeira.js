function calcularAliquotaView() {
	let calcFinanceira = new CalculadoraFinanceira();
    let receita = parseFloat(document.querySelector('.aliquota').value);
    let aliquota = calcFinanceira.calcularAliquota(receita)
	document.querySelector('.valor-aliquota').innerText = aliquota;
}

function somaDeDebitosView() {
	let debitosController = new DebitosController();

	debitosController.listarDebitos().then(listaDebitos => {
		let calcFinanceira = new CalculadoraFinanceira();
		let debitoTotal = calcFinanceira.somaDeDebitos(listaDebitos);
		document.querySelector('.total-debitos').innerText = `R$ ${debitoTotal} reais`;
	});
}