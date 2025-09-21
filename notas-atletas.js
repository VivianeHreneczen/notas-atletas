let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMediaAtletas(listaAtletas) {
  for (let i = 0; i < listaAtletas.length; i++) {
    let atleta = listaAtletas[i];
    let notas = atleta.notas.slice(); 

   
    notas.sort(function(a, b) {
      return a - b;
    });
    
    let notasComputadas = notas.slice(1, 4);
  
    let soma = 0;
    notasComputadas.forEach(function(nota) {
      soma += nota;
    });

    let media = soma / notasComputadas.length;
    
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(",")}`);
    console.log(`Média Válida: ${media}`);
    console.log("");
  }
}

calcularMediaAtletas(atletas);
