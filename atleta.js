class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  // --- Métodos de cálculo ---

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }

  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    // Ordena as notas em ordem crescente
    let notasOrdenadas = this.notas.slice().sort((a, b) => a - b);

    // Remove a menor e a maior nota
    let notasConsideradas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);

    // Calcula a média
    let soma = notasConsideradas.reduce((total, nota) => total + nota, 0);
    return soma / notasConsideradas.length;
  }

  // --- Métodos de acesso (getters) ---

  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemAlturaAtleta() {
    return this.altura;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.calculaCategoria();
  }

  obtemIMC() {
    return this.calculaIMC();
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }
}
