let contato = { nome: 'Liliane', telefone: '31983710705' }

let contatoString = JSON.stringify(contato)
alert(contatoString)
let contatoObjeto = JSON.parse(contatoString)
alert(contatoObjeto.nome)
alert(contatoObjeto.telefone)   
