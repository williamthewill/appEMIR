/*eslint no-unused-vars: */
/* global ContasDAO Conta*/

class ContasController{
	salvarConta(nome, valor, vencimento){
		let contaDAO = new ContasDAO();
		let conta = new Conta(nome, valor, vencimento);
		return contaDAO.save(conta).then(data => data);
	}
	deletarConta(){}
	
	listarContas() {
		let contasController = new ContasController();
		const contasDao = new ContasDAO();
		return contasDao.list().then(data => data);
	}
}