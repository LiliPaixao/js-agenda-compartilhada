//Soma dos números do visitante

// function sum(x,y) {
//     return x+y
    
// }

// let number = +prompt("Informe o primeiro número", 2);
// let number2 = +prompt("Informe o segundo número", 4);
// let resultado = sum(number,number2);
// alert(" A soma dos números é  " + resultado);





//Por que 6.35.toFixed(1) == 6.3?


// let number = 6.35

// //alert( number.toFixed(2) ); // 6.36
// //alert( number.toFixed(1) ); // 6.4
// //alert(Math.round(number)) //6


// let multiplicado = number * 10;
// let arredondado = Math.round(multiplicado)
// let resultadoFinal = (arredondado /10).toFixed(1)
// alert(resultadoFinal)



//Repita até que a entrada seja um número.

// function readNumber() {
//     let num;

//         do{
//             num = prompt("Digite um número", "");

//             if (num === null || num.trim() === "" ){
//                 return null;
//             }
//         } while(isNaN(num));

//         return Number(num);
//     }
 

// let result = readNumber();
// alert("O número digitado é: " + result);

//Um loop infinito ocasional

                       // a cada volta do loop, o valor de i é incrementado em 0.2. O loop continua enquanto i for menor que 10.
// for (let i = 0; i < 10; i = i + 0.2) {
//     console.log(i);
// }


//Um número aleatório entre mínimo e máximo.
// function random(min,max) {
//     return min + Math.random() * (max - min);
// }


//Um número inteiro aleatório entre min e max

// function random(min,max) {
//     return Math.floor(min + Math.random() * (max - min +1));
// }

// alert(random(1,5))