let cel1 = new Celular(
    "c1",
    "Samsung",
    "A12",
    "4 GB",
    "64 GB",
    "MediaTek Helio P35",
    "5 câmeras",
    "a12.jpg"

)

let cel2 = new Celular(
    "c2",
    "Samsung",
    "A10",
    "2 GB",
    "32 GB",
    "Exynos 7884 Octa-Core",
    "3 câmeras",
    "a10.jpg"
)

let cel3 = new Celular(
    "c3",
    "Motorola",
    "Moto E22",
    "4 GB",
    "64 GB",
    "Octa-Core",
    "3 câmeras",
    "e22.jpg"
)

let cel4 = new Celular(
    "c4",
    "Apple",
    "Iphone 11",
    "4 GB",
    "64 GB",
    "A13 Bionic",
    "3 câmeras",
    "iphone 11.jpg"
)

let cel5 = new Celular(
    "c5",
    "Xiaomi",
    "Redmi Note 9",
    "4 GB",
    "128 GB",
    "MediaTek Helio G85",
    "5 câmeras",
    "xiaomi.jpg"
)

var listaDeCell = [cel1, cel2, cel3, cel4, cel5]

for (let i = 0; i < listaDeCell.length; i++) {
    document.write(`
    <div class = "card">
            <img class = "img" src ="img/${listaDeCell[i].img}"/>
                <h2 class = "marca">${listaDeCell[i].marca}</h2>
                <p class = "modelo">${listaDeCell[i].modelo}</p>
                <p class = "ram">${listaDeCell[i].ram}</p>
                <p class = "proc">${listaDeCell[i].proc}</p>
                <p class = "arm">${listaDeCell[i].arm}</p>
                <p class = "qtdDecam">${listaDeCell[i].qtdDecam}</p>
    </div>
 `)

}
let TV1 = new TV(
    "t1",
    "Samsung",
    "50BU8000",
    "40 polegadas",
    "TV1 DNV.jpg"
)

let TV2 = new TV(
    "t2",
    "Philips",
    "50PUG7406",
    "43 polegadas",
    "TV2.jpg"
)

let TV3 = new TV(
    "t3",
    "LG",
    "65UP771C",
    "40 polegadas",
    "TV3.jpg"
)

let TV4 = new TV(
    "t4",
    "TCL",
    "C725",
    "50 polegadas",
    "TV4.jpg"
)

let TV5 = new TV(
    "t5",
    "Toshiba",
    "55M550KB",
    "53 polegadas",
    "TV5.jpg"
)
var listaTV = [TV1, TV2, TV3, TV4, TV5]

for (let i = 0; i < listaTV.length; i++){
    document.write(`
    <div class = "card">
            <img class = "img" src ="img/${listaTV[i].img}"/>
                <h2 class = "marca">${listaTV[i].marca}</h2>
                <p class = "modelo">${listaTV[i].modelo}</p>
                <p class = "tamanho">${listaTV[i].tamanho}</p>
    </div>
 `)
}
//criando duas listas de favoritos
    let meusProdutosTop = new Favoritos();
    let ProdutosTopdaFulaninha = new Favoritos();
   
//adicionando produtos a primeira lista de favoritos
    meusProdutosTop.adicionarProduto(cel1);
    meusProdutosTop.adicionarProduto(TV1);

//adicionando produtos a segunda lista de favoritos
    ProdutosTopdaFulaninha.adicionarProduto(cel5);
    ProdutosTopdaFulaninha.adicionarProduto(TV5);

//exibindo os produtos da primeira lista no HTML    
    //meusProdutosTop.exibirnoHTML();
    
//exibindo os produtos da segunda lista no HTML
    //ProdutosTopdaFulaninha.exibirnoHTML()