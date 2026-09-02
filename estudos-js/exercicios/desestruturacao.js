// let arr = ["John", "Smith"]

// let [firstName, surname] = arr;

// alert(firstName);
// alert(surname);
// alert(arr); 

// let [firstName, , , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert(title);

// let [first, second, third] = "abc";

// alert(first); //a
// alert(second); //b
// alert(third); //c

// sem desestruturação

// let letras = "abc";
// let first = alert(letras[0]);
// let second = alert(letras[1]);
// let third = alert(letras[2]);

//com desestruturação

// let [first, second, third] = "abc";

// alert(first); //a
// alert(second); //b
// alert(third); //c


// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// let {title, width, height} = options;

// alert(options.title);  // Menu
// alert(options.width);  // 100
// alert(options.height); // 200


// let user = {
//     name: "Ana",
//     age: 28,
//     adress: {
//         city: "Nova Lima",
//         state: "MG"
//     },
//     hobbies: ["Cozinhar", "Viajar", "Ler"]
// };

// function showProfile({
//         name = "não informado",
//         age = 0,
//         adress: {
//             city, 
//             state 
//         },
//         hobbies : [ hobby1, hobby2, hobby3 ]
//     }) {
//         alert(
//             `Nome: ${name}\n` +
//             `Idade: ${age}\n` +
//             `${city}/${state}\n` +
//             `Hobbies: ${hobby1}, ${hobby2}, ${hobby3}`
//         );
//     }

// showProfile(user);

// let user = {
//     name: "John",
//     years: 30
// };

// let {
//     name,
//     years: age,
//     isAdmin = false
// } = user ;

// alert(name);
// alert(age);
// alert(isAdmin);


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250 
};

function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return `O maior salário é de ${maxName} com o valor de ${maxSalary}`;
}

alert(topSalary(salaries));