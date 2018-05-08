/*eslint no-unused-vars: */
/* global DatabaseConnetion */

class ContasDAO{
	save(conta){
		let client = new DatabaseConnetion().connection();
		
		return new Promise(function(resolve){
			client.transaction(function (tx) {
				let id = Math.floor(Date.now() / 1000);
				tx.executeSql(`INSERT INTO contas (id, nome, valor, vencimento) VALUES (${id}, "${conta.nome}", "${conta.valor}", "${conta.vencimento}")`);
				resolve(true);
			});

		});
	}

	delete(){}
	
	list(){
		let client = new DatabaseConnetion().connection();

		return new Promise(function(resolve){
			client.transaction(function (tx) {
				let id = Math.floor(Date.now() / 1000);
				tx.executeSql('SELECT * FROM contas', [], function (tx, results) {
					let arrContas = results.rows;
					if(arrContas) {
						resolve(arrContas);
					} else {
						throw 'Sem filiação para o usuário logado';
					}
				}, null);
			});
		});
	}
}