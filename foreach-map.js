const alunos = [
  {
    nome: "Fernando",
    nota: {
      portugues: 5,
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

// FOR EACH

const novalista1 = alunos.forEach((aluno) => {
  return aluno.nome;
});

// MAP
const novalista2 = alunos.map((aluno) => {
  return aluno.nome;
});

console.log(novalista1);
console.log(novalista2);

const novalista3 = alunos.map((aluno) => {
  return (
    <tr>
      <td>{aluno.nome}</td>
      <td>{aluno.nota.matematica}</td>
    </tr>
  );
});

console.log(novalista3);
