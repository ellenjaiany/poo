class Aluno{

    constructor(matricula, nome, idade){

        this.matricula = matricula;

        this.nome = nome;

        this.idade = idade;

    }

}

// A classe terá um único atributo: listaDeAlunos

// O construtor não receberá nenhuma entrada.

// O construtor deverá inicializar o atributo com um 

//array vazio.

// Adicione o método adicionarAluno. Ele terá como entrada

// um aluno. O aluno da entrada será adicionado ao atributo

// listaDeAlunos

class Turma{

    constructor(){

        this.listaDeAlunos = [];

    }



    adicionarAluno(aluno){

        this.listaDeAlunos.push(aluno);

    }



    removerAluno(matricula){

        // For para percorrer o array

        for (let i = 0; i < this.listaDeAlunos.length; i++) {



            // If para encontrar a matrícula pretendida

            if(this.listaDeAlunos[i].matricula == matricula){

               

                // Splice para deletar o elemento do array

                this.listaDeAlunos.splice(i, 1);

            }

        }

    }



}