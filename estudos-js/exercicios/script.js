    // alert("Eu sou JavaScript!");
    
    //window.alert("Olá, mundo!");

    // make current user information global, to let all scripts access it
    // window.currentUser = {
    //     name: "Liliane",
    //     email: "cpaixaoliliane@gmail.com"
    // }

    // alert("Bem-vinda, " + window.currentUser.name + "!" + "\n" +
    //     "Confirme seus dados: " + window.currentUser.email
    // );

    //background red
    //document.body.style.backgroundColor = "blue";

    // setTimeout(() => document.body.style.backgroundColor = "blue", 2000);

    // alert(location.href);
    // if (confirm("Deseja visitar o Google?")) {
    //     location.href = "https://www.google.com";
    // }

    // let name, admin;
    // UserName = "John";
    // admin = UserName;
    // alert(admin);

    // let ourPlanetName = "Earth";
    // let currentUserName = "John";

    // const BIRTHDAY = "29.08.1984";

    // function dateBirthday(date) {
    //     const[day, month, year] = date.split(".").map(Number);
    //     const born = new Date(year, month -1, day);
    //     const today = new Date();
    //     let age = today.getFullYear() - born.getFullYear();
    //     const notHadBirthdayThisYear = today.getMonth() < born.getMonth() ||
    //         (today.getMonth() === born.getMonth() && today.getDate() < born.getDate());
    //     if (notHadBirthdayThisYear) {
    //         age--;
    //         return age;
    //     }
    //     return age;
    // }

    // const age = dateBirthday(BIRTHDAY);
    // alert(age);

    // let name  =  'Liliane';
    // alert(`${1+2} vai dar tudo certo com JavaScript!`);


    //O significado undefined é "nenhum valor foi atribuído".
    // let age;
    // alert(age); // undefined

    // typeof undefined; // "undefined"
    // typeof 0; // "number"
    // typeof 10n; // "bigint"
    // typeof true; // "boolean"
    // typeof "foo"; // "string"
    // typeof Symbol("id"); // "symbol"
    // typeof Math; // "object"
    // typeof null; // "object" (this is a historical bug in JavaScript)  
    // typeof alert; // "function"

    // let userName = "Liliane";
    // alert(`Hello ${userName}`);

    // let value = true;
    
    // valeu = String(value); 
    // alert(typeof valeu); 

    // Unário (um operando)
    // let x = 1;
    // x = -x;
    // alert(x);

    // Binário (dois operandos)
    // let x = 1, y=3
    // alert(x+y);

    // let union = "my" + "string";
    // alert(union);
  
    // Converts non-numbers
    //A necessidade de converter strings em números 
    //alert( +true ); // 1
    //alert( +"" );   // 0

    //Aplication
    //let apples = "2";
    //let oranges = "3";

    // both values converted to numbers before the binary plus
    //alert( +apples + +oranges ); // 5

    // the longer variant
    //alert( Number(apples) + Number(oranges) ); // 5

    // let counter = 1;
    // alert(2 * counter);
    // counter++;
    // alert(2 * counter);

    // let a = 1, b = 1;
    // let c  = ++a; //2
    // alert(c);
    // let d = b++; //1
    // alert(d);


//alert("" + 1 + 0); // "10"
//alert( "" - 1 + 0); // -1
//alert( true + false); // 1
//alert(  6 / "3" ); //2
//alert( "2" * "3" ); //6
//alert( 4 + 5 + "px"); //9px      
//alert( "$" + 4 + 5); // $45
//alert( "4" - 2); // 2
//alert( "4px" - 2); // NaN
//alert( "  -9  " + 5); // "  -9  5"
//alert( "  -9  " - 5); // -14
//alert( null + 1); // 1
//alert( undefined + 1); // NaN
//alert( " \t \n" - 2); // -2


// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

//alert(Number(a) + Number(b)); // 3
//alert(+a + +b);
//alert(Number(a+b)); //12

// let a = Number(prompt("First number?", 1));
// let b = Number(prompt("Second number?", 2));

// alert(a + b); // 3 


//Operador condicional (ternário)
// if ("0") {
//     alert('Hello'); 
// }

// let inventorJavaScript = prompt("Quem inventou o JavaScript?", "ECMAScript");

// if (inventorJavaScript === "ECMAScript") {
//     alert('right');
// } else {
//     alert("You don't know? “ECMAScript”!");
// }

// let numberUser = prompt("Digite seu número", -1);
// if (numberUser > 0) {
//     alert(1);
// } else if (numberUser < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }

// Wrong

// let login = prompt("Login?", "Employee" ? alert("Hello") : alert("No login"));
// login = prompt("Login?", "Director" ? alert("Greetings") : alert("No login"));


// Correct Way

// let message = (login == "Employee") ? "Hello" :
//               (login == "Director") ? "Greetings" :
//                       (login == "") ? "No login" :
//                                                     "";

// alert(message);

// alert( alert(1) || 2 || alert(3) );

//lert( alert(1) && alert(2) );

// alert( null || 2 && 3 || 4 );

// if (age >= 14 && age <= 90) {

//     alert("Idade entre 14 e 90 anos")
// }

// if(age >= 14 && age <= 90)

// if (-1 || 0) alert( 'first' );

//if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );


// let login = prompt("Login?", "");

// if (login === "Admin") {
//     let senha = prompt("senha?", "");

//     if (senha === "TheMaster") {
//         alert("Bem-vindo(a)!");
//         } else if (senha === "" || senha === null) {
//             alert("Canceled");
//         } else {
//             alert("Senha incorreta");
//     }

//     } else if (login === "" || login === null) {
//         alert("Canceled");
//     } else {
//         alert("Eu não conheço você");
// }

// let i = 3;
// while (i) alert(i--);

// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Sum: ' + sum );

//Mostra valores ímpares de 0 a 10
// for (let i = 0; i <= 10; i++) {

//   // if true, skip the remaining part of the body
//   if (i % 2 == 0) continue;

//   alert(i); // 1, then 3, 5, 7, 9
// }

// for (let i = 0; i < 10; i++) {

//   if (i % 2) {
//     alert(i);
//   }
// }

// for (let i=0; i <10; i++) {
//     if (i > 5) {

//     } else  {
//       continue;
//     }
//   alert(i);
// }

//   let i = 0;
//   while (i++ < 5) alert(i); //1, 2, 3, 4, 5


// let i = 0;
// while (++i < 5) alert(i); //1, 2, 3, 4

// for (let i = 0; i < 5; i++) alert( i ); 1, 2, 3, 4

// for (let i = 0; i < 5; ++i) alert( i ); 1, 2, 3, 4

// for (let i = 2; i <= 10; i++){
//     if (i % 2 == 0) {
//         alert( i );
//     }
// }

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` ); //0, 1, 2
// }

// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }

// let value = prompt("Digite um número maior que 100", '');
//  while (value !== null && +value < 100) {
//     value = prompt("Digite um número maior que 100", '');
//  }


// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

// let browser = prompt("Qual navegador você está usando?", "");

// if (browser === "Edge") {
//   alert("Você está usando o Edge!");
// } else if (browser === "Chrome" ||
//            browser === "Firefox" ||
//            browser === "Safari" ||
//            browser === "Opera") {
//   alert("Ok, we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }


// let a = +prompt("a?", "");

// switch (a) {
//   case 0:
//     alert( 0 );
//     break;

//    case 1:
//     alert(1);
//     break;

//     case 2:
//     case 3:
//         alert( '2,3');
//         break;
// }

// function checkAge(age) {
//   return (age > 18) ? true : confirm('Did parents allow you?')
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Did parents allow you?')
// }

// function min(a, b) {
//     return (a < b) ? a : b;
// }

// function min(a,b) {
//     if(a < b) {
//         return a;
//     } else {
//         return b;
//     }   
// }

// function pow(x, n) {
//     let result = x;

//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// function pow(x, n) {
//     return x ** n;
// }

// function pow(x, n) {
//     return Math.pow(x, n);
// }

// let sayHi = () => alert("Hello");
// sayHi();

// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ? () => alert("Hello!") : () => alert("Greetings !");

// welcome();

// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }

// alert(sum(2, 3));

// let ask  =  (question, yes, no) => confirm(question) ? yes() : no();

// ask("Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
// );

// ask("Do you agree?", () => alert("You agreed."), () => alert("You canceled the execution."));

// Declaração de função
//function sayHi() {
//    alert("Oi");
//}

// sayHi();


// let sayHi = function () {
//     alert("Oi");
// };

// alert(sayHi); // function() {...}

//let func = sayHi;
// func();

//sayHi();

//Expressão de função
// let age = prompt("what is your age?", 17);
// let welcome = (age < 18) ?
//     () => alert("Hello"):
//     () => alert("Greetings");
    
// welcome();


// let user = {
//     name: "John",
//     age: 30,
// }

// let key = prompt("What do you want to know about the user?", "name");


// alert(user[key]);

// let user = {};
// alert(user.noSuchProperty === undefined); // true

// let user = { age: 30};

// let key = "age";
// alert (key in user ); // true

//alert("age" in user);
// alert("blabla" in user);


// let obj = {
//   test: undefined
// };

// //alert( obj.test ); // it's undefined, so - no such property?

// alert( "test" in obj ); // true, the property does exist!

// let user={};
//     user.userName = "Liliane";
//     user.surname = "Paixão";


// let user={
//     userName: "Liliane",
//     surname: "Paixão",
// }
// //Altere o valor de name para Pete.
// user.userName = "Pete";
// alert(user.userName); // "Pete";

// //Remova a propriedade userName objeto.
// delete user.userName;
// alert(user.userName); // undefined


// let schedule = {};

// function isEmpty() {
//     for (let key in schedule) {
//         return false;
//     }
//     return true;
// }

// alert(isEmpty(schedule)); // true

// schedule = {
//     "8:30": "Acorde",       
// }

// alert(isEmpty(schedule)); // false

// let salaries = {
//     Jonh: 100,
//     Ann: 160,
//     Pete: 130,
// }

//alert( salaries.Jonh + salaries.Ann + salaries.Pete ); // 390

// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let key in salaries) {
//         sum += salaries[key];
//     }
//     return sum;
// }

// alert(sumSalaries(salaries)); // 390

// let sum = 0;
// for (let key in salaries) {
//     sum = sum + salaries[key];
// }
// alert(sum);

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === "number") {
//             obj[key] *= 2;
//         }
//     }
// }       

// let idade = {
//     client1: 20,
//     client2: 30,
//     client3: 40,
//     name: "Liliane",
// }   

// multiplyNumeric(idade);

// alert(idade.client1); // 40
// alert(idade.client2); // 60
// alert(idade.client3); // 80
// alert(idade.name); // "Liliane"

// let user = {};
// alert(user.noSuchProperty === undefined);

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete",
// delete(user.name);



// let schedule = {
//     name: "Liliane"
// };

// function isEmpty(schedule) {
//     if (Object.keys(schedule).length === 0){
//         return true;
//     }else {
//         return false;
//     }
// }

// alert(isEmpty(schedule));


// let salaries = {
//     John: 100,
//     Liliane: 160,
//     Paixao: 130,
// }

// let sum = 0;

// for (let key in salaries) {
//    sum = sum + (salaries[key]);
   
// }
// alert(sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// console.log(typeof menu["width"]);
// console.log(typeof menu["title"]);

// function multiplyNumeric(menu) {
//     for ( let key in menu ){
//         if (typeof(menu[key]) == "number"){
//            menu[key] = menu[key]*2
//         }
//     }
// }

// let user = {
//     name: "John",
//     age: 30,
// };

// let clone = Object.assign({}, user);

// alert(clone.name);
// alert(clone.age);

// Object.assign(user, {name: "Pete"});

// alert(user.name);

// let user = {
//     firstName : "Liliane",
//     sayHi() {
//         let arrow = () => alert(this.firstName);
//         arrow();
//     }
// };

// user.sayHi();

// function makeUser() {
//     return {
//         name: "John",
//         ref() {
//             return this;
//         },
//     };
// }
// let user = makeUser();

// alert(user.ref().name);


// CALCULADORA 

// let calculator = {
//     read() {
//         this.a = +prompt("Enter the first number?", 0);
//         this.b = +prompt("Enter the second number?", 0);
//     },
//     sum() {
//         return this.a + this.b;     
//     },
//     mul() {
//         return this.a * this.b;
//     }
// }

// calculator.read(5,2);
// alert(calculator.sum());
// alert(calculator.mul());



// let ladder = {
//     step : 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;        
//     },
//     showStep: function() {
//         alert(this.step);
//         return this;
//     },
// };

// ladder.up().up().down().down().showStep();

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Liliane");
// alert(user.name);
// alert(user.isAdmin);


// let obj = {};

// function A() {
//     return obj;
// }

// function B() {
//     return obj;
// }

// let a = new A;
// alert(a);

// let b = new B;
// alert(b);

// alert(a === b);
// alert(a == b);

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt("Enter the first number ?", 0);
//         this.b = +prompt("Enter the second number ?", 0);
//     };
//     this.sum = function() {
//         return this.a + this.b;
//     };
//     this.mul = function() {
//         return this.a * this.b;
//     }
// }

// let calculator = new Calculator();

// calculator.read();
// alert("Soma = " + calculator.sum());
// alert("Multiplicação = " + calculator.mul());

// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//         this.value = this.value + +prompt("Enter a number to add?", 0);
//     }
// }

// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// alert(accumulator.value);

// let fruits = ["Apple", "Orange", "Plum"];

// for (let fruit of fruits) {
//     alert(fruit);
// }

// for (let i = 0; i < fruits.length; i++) {
//     alert(fruits[i]);
// }


// for (let key in fruits) {
//     alert(fruits[key]);
// }

// let fruits = ["Apple", "Orange", "Plum"];

// let shoppingCart = fruits;
// shoppingCart.push("Banana");

// alert(fruits.length); // 4

// let styles  = ["Jazz", " Blues"];
// styles.push(" Rock-n-Roll");
// //styles[Math.floor(styles.length / 2)] = "Classics";
// styles.splice(Math.floor(styles.length/2), 1, " Classics");
// alert(styles.shift());
// styles.unshift("Rap", " Reggae");
// alert(styles);

// let arr = ["a", "b"];

// arr.push(function() {
//     alert(this);
// });

// arr[2](); 

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt("Enter the first number ?", 0);
//         this.b = +prompt("Enter the second number ?", 0);
//     };
//     this.sum = function() {
//         return this.a + this.b;
//     };
//     this.mul = function() {
//         return this.a * this.b;
//     }
// }



// function sumInput() {
//     let arr = [];
    
//     while (true) {
//         let value = prompt("Enter a number", 0);

//         if (value === "" || value === null || !isFinite(value)) break;
        
//         arr.push(+value);
//     }
       
//     return arr.reduce((sum, num) => sum + num, 0);
// }

// sumInput();
// alert(sumInput());

// let arr = ["I", " study ", "Javascript"];

// arr.splice(2, 0, "complex", "language" );

// alert(arr);

// let arr = [1 , 2, 5];

// arr.splice(-1, 0, 3, 4);

// alert(arr);
