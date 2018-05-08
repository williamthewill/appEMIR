/*eslint no-unused-vars: */

class DatabaseConnetion {	
	connection() {
		let client = openDatabase('emir', '1.0', 'emir DB', 2 * 1024 * 1024);
		client.transaction(function (tx) {
			tx.executeSql(
				`CREATE TABLE IF NOT EXISTS declarador (
					id unique,
					nome text,
					login text,
					senha text
				)`
			);

			tx.executeSql(
				`CREATE TABLE IF NOT EXISTS dependente (
					id unique,
					nome text,
					filiacao text
				)`
			);

			tx.executeSql(
				`CREATE TABLE IF NOT EXISTS contas (
					id unique,
					nome text,
					valor text,
					vencimento text
				)`
			);
		});
		return client;
	}
}