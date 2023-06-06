var aluno1 = new Aluno("Jubileu", '4576', 15);
var aluno2 = new Aluno("Rebeca", '1234', 16);
var aluno3 = new Aluno("Leticia", '2345', 15);
var aluno4 = new Aluno("Pedro", '3784', 17);
var aluno5 = new Aluno("Amanda", '5521', 18);

const segundoAno = new Turma();
const terceiroAno = new Turma();

segundoAno.adicionarAluno(aluno1)
segundoAno.adicionarAluno(aluno2)
segundoAno.adicionarAluno(aluno3)

terceiroAno.adicionarAluno(aluno4)
terceiroAno.adicionarAluno(aluno5)

segundoAno.removerAluno("4376")

console.log(segundoAno)
console.log(terceiroAno)
