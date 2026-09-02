// Filtrar membros únicos da matriz

// arr = ["Hare", "Hare", "Krishna"];

// function unique(arr) {
//     //crio uma variável que guarda um set vazio
//     let result = new Set();
    
//     //itero sobre os itens do array, adicionando cada um ao set
//     for (let item of arr) {
//         // incremento o set com o item, se ele já existir, o set não irá adicioná-lo novamente
//         result.add(item);
//     }
//     //transformo o set em array usando o operador spread e retorno o resultado
//     let resultArray = [...result];
//     return resultArray;
    
// }

// alert(unique(arr))

// Filtrar anagramas

//let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// inicio com Map vazio para armazenar os anagramas únicos

// itero sobre o arrar, 
// para cada item, transformo a palavra em minúscula, 
// cada item é divido em caracteres, 
// ordeno os caracteres (npa -> anp) (pan -> anp)
// e junto novamente para formar a chave do anagrama

//guardo a chave com o valor do item original no map
//['anp', 'nap'] 
//['anp', 'PAN']

//uso set para armazenar as chaves do anagrama, pois o set não permite chaves duplicadas, ou seja, se houver
//um anagrama repetido, ele não será adicionado ao set


//mostro o valor do set, que contém apenas os anagramas únicos


// function aclean(arr) {
//     let anagrama = new Map();

//     for (let item of arr) {
//         //transformo a palavra em minúscula, divido em caracteres, ordeno os caracteres e junto novamente para formar a chave do anagrama
//         let sorted = item.toLowerCase().split("").sort().join("");
//         //adiciono a chave do anagrama ao set
//         anagrama.add(sorted);
//     }
//     return anagrama;
// }

// alert(aclean(arr))


// let agenda = new Map();
// agenda.set('Liliane','31983710705');
// agenda.set('Maria','31983710706');
// agenda.set('João','31983710707');

//alert(agenda.size);
//alert(agenda.has('Maria'));
//alert(agenda.has('Pedro'));

// for( let [nome, telefone] of agenda) {
//     alert(`${nome}: ${telefone}`)
// }

// let emails = new Set();
// emails.add('cpaixaoliliane@gmail.com');
// emails.add('maria@gmail.com');
// emails.add('maria@gmail.com');

// //alert(emails.size);

// for (let email of emails) {
//     alert(`O email é: ${email}`)
// }

