class Dependente {
	constructor(nome, filiacao) {
		if(
			nome.length > 3 && filiacao.length >= 3
		) {
			this.nome = nome;
			this.filiacao = filiacao;
		} else {
			return 'Dependente não pode ser criado';
		}
	}

	getNome(){
		return this.nome;
	}

	getFiliacao(){
		return this.filiacao;
	}
}
