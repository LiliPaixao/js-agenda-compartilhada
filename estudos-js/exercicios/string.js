//alert("I'm the Waalrus!")

// let userName = "Liliane";

// alert(userName.at(-1));


// for( let letter of "Liliane") {
//     alert(letter);
// }


// let  userName = "John";
// userName = "L" + userName.slice(1);
// alert( userName );

// alert('Interface'.toUpperCase())
// alert('Interface'. toLowerCase())
// alert('Interface'[0].toLowerCase())

// let char = 'Widget width id'
// alert(char.indexOf('Widget'))//0
// alert(char.indexOf('widget')) //-1
// alert(char.indexOf('id')) //1
// alert(char.indexOf('id', 2)) //8

// let phrase = "As sly as a fox, as strong as an ox";

// let target = 'as';

// let pos = 0
// while (true) {
//     let foundPos = phrase.indexOf(target, pos)
//     if(foundPos === -1) break

//     alert(`Found at ${foundPos}`)
//     pos = foundPos + 1
// }



// function checkSpam(str){
//     if( str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")){
//     return alert("true")
//     }
//     return alert("false")
// }

// function checkSpam(str){
//     let lowerStr = str.toLowerCase()

//     return lowerStr.includes('viagra') || lowerStr.includes('xxx')
// }


// let str = "Widget with id"

// if (str.indexOf("Widget") != -1){
//     alert("We found it")
// }

// alert("Widget width id".includes("Widget"))
// alert("Hello".includes("Bye"))

// alert("Widget".includes("id"))
// alert("Widget".includes("id", 3))


// alert("Widget".startsWith("Wid"))
// alert("Widget".endsWith("get"))


// let str = "stringify"

//alert(str.slice(0,5)) //strin
//alert(str.slice(1)) //tringify
//alert(str.substring(2,4)) //ri
//alert(str.substr(2,4)) //ring

//let str = "liliane"

// function ucFirst(str){
//     if (!str) return str;

//     return str[0].toUpperCase() + str.slice(1)
// }

// let wordUser = prompt("Inclua uma palavra que inicie com letra minúscula", "word");

// alert(ucFirst(wordUser))





// function truncate(str, maxlength){
    
//     let numberLetter = str.length
    

//     if(numberLetter > maxlength){

//         return  str.slice(0, maxlength -1 ) + "..."
//     } else
//         return `${str}`
// }

// alert(truncate("What I'd", 10))


// let str = "$120"
// function extractCurrencyValue(str){
//         let semDolar = str.slice(1)
//         return +semDolar
// }

// //alert(extractCurrencyValue(str))
// alert(extractCurrencyValue('$120') === 120)


// Verificar se há spam

// function checkSpam(str){
        
//         if (!str) return false; //se a string vier vazia retorne falso, pois não é spam

//         let strChar = str.toLowerCase();

//         if(strChar.includes("viagra") || strChar.includes("xxx") ) {
//                 return true;
//         } else {
//                 return false;
//         }

// }

// let text = prompt("Insira um texto contendo viagra ou xxx", "xxx")
// alert(checkSpam(text))


// function truncate(str,maxlength) {
//         if (!str) return str;


//         if (str.length > maxlength) {
//                 return str.slice(0, maxlength -1) + "..."
//         } else {
//                 return str
//         }
// }

// let text = prompt("Insira um texto", "Vai dar tudo certo mesmo que esteja confuso agora");
// alert(truncate(text, 20));

// Extraia o dinheiro

function extractCurrencyValue(str){
        if (!str) return str.slice(1) 

        return +str.slice(1)
}

let value = prompt("Insira qualquer valor iniciando com $", "$120");
alert(extractCurrencyValue(value));
// Teste do exercício (vai dar true no console):
console.log(extractCurrencyValue('$120') === 120);