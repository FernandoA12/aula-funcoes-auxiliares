const alunos = [
  {
    nome: "Fernando",
    nota: {
      portugues: 10,
      matematica: 10,
    },
  },
  {
    nome: "Felipe",
    nota: {
      portugues: 8,
      matematica: 6.5,
    },
  },
];

function calculaMedia(nota1, nota2) {
  const soma = nota1 + nota2;

  return soma / 2;
}

alunos
  .filter((aluno) => {
    const media = calculaMedia(aluno.nota.portugues, aluno.nota.matematica);

    return media > 8;
  })
  .filter((aluno) => {
    const primeiraLetra = aluno.nome.slice(0, 1);
    return primeiraLetra === "F";
  })
  .map((aluno) => {
    const media = calculaMedia(aluno.nota.portugues, aluno.nota.matematica);

    console.log(`O ALUNO ${aluno.nome} FICOU COM A MEDIA ${media}`);
  });
