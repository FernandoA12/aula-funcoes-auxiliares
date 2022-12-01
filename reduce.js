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

// O ALUNO {NOME} FICOU COM A MEDIA {MEDIA}

function calculaMedia(nota1, nota2) {
  const soma = nota1 + nota2;

  return soma / 2;
}

const somaDasMedias = alunos.reduce((acc, aluno) => {
  const media = calculaMedia(aluno.nota.portugues, aluno.nota.matematica);
  return acc + media;
}, 0);

console.log(somaDasMedias / alunos.length);
