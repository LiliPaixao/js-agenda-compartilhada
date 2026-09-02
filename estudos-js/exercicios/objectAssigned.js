

//mutação direta = muda o array original

let carrinho = [
    { id: 1, produto: 'Maçã', qtd: 3 },
    { id: 2, produto: 'Pão', qtd: 1},
    { id: 3, produto:'Leite', qtd: 2},
]

function aumentarQtd(id, changes){

    if(!id) {
        console.error('Id não existente')
        return
    }

    const carrinhoNovo = carrinho.find( n => n.id === id)
    if (!carrinhoNovo) {
        console.error('Informe um id válido')
        return
    }
    //Object.assign(alvo, origem)
    Object.assign(carrinhoNovo, changes)
    return carrinhoNovo
}

aumentarQtd(2,  {produto: 'Pão francês', qtd: 5},)
console.log(carrinho)


// let carrinho = [
//     { id: 1, produto: 'Maçã', qtd: 3 },
//     { id: 2, produto: 'Pão francês', qtd: 5},
//     { id: 3, produto:'Leite', qtd: 2},
// ]