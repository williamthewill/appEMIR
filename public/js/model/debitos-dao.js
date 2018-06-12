/*eslint no-unused-vars: */
/* global DatabaseConnetion */

class DebitosDAO{
	constructor(){
		this.client = new DatabaseConnetion().connection();
	}
	save(nome, valor, vencimento){
		let client = this.client
		let debito = new Debito(nome, valor, vencimento);
		return new Promise(function(resolve){
			client.transaction(function (tx) {
				let id = Math.floor(Date.now() / 1000);
				tx.executeSql(`INSERT INTO contas (id, nome, valor, vencimento) VALUES (${id}, "${debito.nome}", "${debito.valor}", "${debito.vencimento}")`);
				resolve(true);
			});

		});
	}

	delete(){}
	
	list(){
		let client = this.client
		return new Promise(function(resolve){
			client.transaction(function (tx) {
				let id = Math.floor(Date.now() / 1000);
				tx.executeSql('SELECT * FROM contas', [], function (tx, results) {
					let arrDebitos = results.rows;
					if(arrDebitos) {
						resolve(arrDebitos);
					} else {
						throw 'Sem filiação para o usuário logado';
					}
				}, null);
			});
		});
	}
}