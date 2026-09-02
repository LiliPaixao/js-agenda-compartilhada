//filter: peneira, devolve array com quem passa no teste (retorna true ou false)

//let numeros = [1,2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//map  transforma, devolve array do mesmo tamanho
//Quando precisamos iterar e retornar os dados para cada elemento, podemos usar map.

// let numeros = [1, 2, 3, 4, 5 ]
// let numerosMultiplicados = numeros.map(n => n * 2)
// alert(numerosMultiplicados)



//reduce: acumula, devolve um único valor

//array.reduce(função, valorInicial)

// let numeros = [1, 2, 3, 4, 5]
// let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
// alert(soma)



//find: retorna um elemento (o primeiro que passa), ou undefined se nenhum elemento satisfizer a condição.

//findIndex: retorna o índice do primeiro elemento que satisfaz a condição, ou -1 se nenhum elemento satisfizer a condição.

//some: retorna true se pelo menos um elemento satisfizer a condição, caso contrário, retorna false.

//every: retorna true se todos os elementos satisfizerem a condição, caso contrário, retorna false.



const produtos = [
    {nome: 'Camiseta', preco: 20},
    {nome: 'Calça', preco: 120},
    {nome: 'meia', preco: 15},
    {nome: 'jaqueta', preco: 250},
];

//filtro os produtos menores que 30
//reduce para somar o preço total dos produtos


let produtosBaratos = produtos.filter(n => n.preco < 30)
console.log(produtosBaratos)

let soma = produtosBaratos.reduce((acumulador, {preco}) => acumulador + preco, 0)
console.log(soma)

let nomesProdutosBaratos = produtosBaratos.map(p => p.nome)
console.log(nomesProdutosBaratos)