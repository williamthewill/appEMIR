let totalDebitos;

function somaDeDebitosView() {
	let debitosController = new DebitosController();

	debitosController.listarDebitosApi().then(listaDebitos => {
		let calcFinanceira = new CalculadoraFinanceira();
		totalDebitos = calcFinanceira.somaDeDebitos(listaDebitos);
		document.querySelector('.total-debitos').innerText = `R$ ${totalDebitos} reais`;
	});
}

function calcularAliquotaView() {
	let calcFinanceira = new CalculadoraFinanceira();
    let receita = parseFloat(document.querySelector('.aliquota').value);
    let aliquota = calcFinanceira.calcularAliquota(receita)
	document.querySelector('.valor-aliquota').innerText = aliquota;
	let impostoRenda = calcFinanceira.impostoRenda(aliquota, totalDebitos);
	document.querySelector('.valor-impostorenda').innerText = impostoRenda;
}