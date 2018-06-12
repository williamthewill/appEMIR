function calcularAliquotaView() {
    let receita = parseFloat(document.querySelector('.aliquota').value);
    let aliquota = calcularAliquota(receita)
	document.querySelector('.valor-aliquota').innerText = aliquota;
}

function somaDeDebitosView() {
	let debitosController = new DebitosController();

	debitosController.listarDebitos().then(listaDebitos => {
		let debitoTotal = somaDeDebitos(listaDebitos)
		document.querySelector('.total-debitos').innerText = `R$ ${debitoTotal} reais`;
	});
}