class Celular {
    constructor(id, marca, modelo, ram, arm, proc, qtdDecam, img) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.ram = ram;
        this.arm = arm;
        this.proc = proc;
        this.qtdDecam = qtdDecam;
        this.img = img;
    
    }

}

class TV {
    constructor(id, marca, modelo, tamanho, img) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.tamanho = tamanho;
        this.img = img;
    }
}

class Favoritos {
    constructor(){
        this.ListaDeProdutos = [];
    }
    adicionarProduto(produto){
        this.ListaDeProdutos.push(produto);
    }
    removerProduto(id){
        for (let i = 0; i < this.ListaDeProdutos.length; i++) {

            if(this.ListaDeProdutos[i].id == id){

               this.ListaDeProdutos.splice(i, 1);
            }
        }

    }
        exibirnoHTML(){
            /*Deixando vazio o conteudo da tag com id produtos*/
            document.getElementById('produtos').innerHTML = " ";
            for (let i = 0; i < this.ListaDeProdutos.length; i++) {
                document.getElementById('produtos').innerHTML += (`
                <div class = "card">
                        <img class = "img" src ="img/${this.ListaDeProdutos[i].img}"/>
                            <h2 class = "marca">${this.ListaDeProdutos[i].marca}</h2>
                            <p class = "modelo">${this.ListaDeProdutos[i].modelo}</p>
                            <p class = "tamanho">${this.ListaDeProdutos[i].tamanho}</p>
                </div>
             `)
            }
        }
}
    
