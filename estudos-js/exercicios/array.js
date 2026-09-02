// let arr = ["t", "e", "s", "t"]

// alert(arr.slice(1,3));

// alert(arr.slice(-2));

// alert(arr.slice());


// Método concat

//arr.concat(arg1,arg2);

// let ter = [1,2]

//alert(arr.concat([3,4], [5,6]) )

//alert(arr.concat([7,8], 9, 10))

// let arrayLike = {
//     0: "something",
//     1: "else",
//     [Symbol.isConcatSpreadable]:true,
//     length: 2,
// };

// alert(ter.concat(arrayLike))

// Iterar: para cada

//["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
// });


// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths);

//let arr = [1, 0, false];

//alert(arr.indexOf(0)) //1
//alert(arr.indexOf(false)) //2 - está  no índice 2

//alert(arr.indexOf(1));


//Se quisermos verificar se um item elemento existe na matriz e não precisarmos do índice, então arr.includesé preferível.
//alert(arr.includes(1))

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
//     {id: 4, name: "John"},
// ];

//let user = users.find(item => item.id == 1);
//alert(user.name);


//alert(users.findIndex(user => user.name == 'John' ));

//alert(users.findLastIndex(user => user.name == 'John'));

// let someUsers = users.filter(item => item.id < 3);
// alert(someUsers.length);


let str = 'amarelo-submarino'

function camelize(str){
    let partes = str.split('-')
    let maiuscula = partes.map(item => item[0].toUpperCase() + item.slice(1))
    let juntar =  maiuscula.join("")
    return juntar
    
}

let resultado = camelize(str)
alert(resultado);