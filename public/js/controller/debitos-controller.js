/*eslint no-unused-vars: */
/* global DebitosDAO Debito*/

const axios = require('axios')

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

	listarDebitosApi(){
		return new Promise(resolve => {
			axios.get('http://127.0.0.1:3000/user/invoices').then(invoices => {
				resolve(invoices.data)
			})
		})
	}
}