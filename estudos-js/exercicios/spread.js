

//mutação direta = muda o array original

let carrinho = [
    { id: 1, produto: 'Maçã', qtd: 3 },
    { id: 2, produto: 'Pão', qtd: 1},
    { id: 3, produto:'Leite', qtd: 2},
]

function aumentarQtdImutavel(id, changes){

    if(!id) {
        console.error('Id não existente')
        return
    }

    const itemEncontrado = carrinho.find( n => n.id === id)
    if (!itemEncontrado) {
        console.error('Informe um id válido')
        return
    }
    // ... espalha as propriedades do objeto
    let itemAtualizado = { ...itemEncontrado, ...changes, id: itemEncontrado.id}

    const carrinhoAtualizado = carrinho.map(item => {
            if(item.id  === id) {
            return itemAtualizado
        } else {
            return item
        }
    })
    return carrinhoAtualizado
}


// const resultado = aumentarQtdImutavel(2, {produto: 'Brioche',qtd:8})
// console.log(resultado)
// console.log(carrinho)

const duvida = aumentarQtdImutavel(2, {id:99, qtd:50})
console.log(duvida)

