/*eslint no-unused-vars: */

class Usuario {
	constructor(nome, email, login, senha) {
		if(this.instance === true) {
			return 'Usuário já foi instanciado';
		}
		
		if(
			nome.length > 3 &&
			email.match(/^[a-z0-9]+@[a-z]+.com.br|com$/) &&
			login.length > 3 &&
			senha.match(/[A-z0-9]+/)
		) {
			this.nome = nome;
			this.email = email;
			this.login = login;
			this.senha = senha;
			this.dependentes = [];
			this.instance = true;
		} else {
			return 'Usuário não pode ser criado';
		}
	}

	getNome() {
		return this.nome;
	}

	getEmail() {
		return this.email;
	}

	getLogin() {
		return this.login;
	}

	getSenha() {
		return this.senha;
	}

	getDependentes() {
		return this.dependentes;
	}
}
