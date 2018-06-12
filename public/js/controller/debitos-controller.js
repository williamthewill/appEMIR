/*eslint no-unused-vars: */
/* global DebitosDAO Debito*/

class DebitosController{
	salvarDebito(nome, valor, vencimento){
		let debitoDAO = new DebitosDAO();
		return debitoDAO.save(nome, valor, vencimento).then(data => data);
	}
	deletarDebito(){}
	
	listarDebitos() {
		const debitosDao = new DebitosDAO();
		return debitosDao.list().then(data => data);
	}
}