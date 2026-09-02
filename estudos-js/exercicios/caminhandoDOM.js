// let idAgeTable = document.getElementById('age-table')
// alert(idAgeTable)

// let form = document.forms['search-person']
// let labels = form.querySelectorAll('label')
// alert(labels.length)

// let formSearchPerson = document.querySelector('form[name="search-person"]')
// let labels = formSearchPerson.querySelectorAll('label')
// alert(labels.length)

// let formSearchPerson = document.getElementsByTagName('form')[1]
// let inputs = formSearchPerson.querySelectorAll('input')
// alert(inputs.length)

// let formSearch = document.querySelectorAll('form')[0]
// let labels = formSearch.querySelectorAll('input')
// alert(labels.length)

// let formSearchPerson = document.querySelector('form[name="search-person"]')
// let tdFirst = formSearchPerson.querySelector('td')
// alert(tdFirst.textContent)



//Resumo
// document.getElementsByName('search-person') 
// → retorna uma coleção (NodeList/HTMLCollection), mesmo tendo só 1 resultado. 
// Por isso precisou de [0].


// document.querySelector('td') 
// → retorna um elemento único (o primeiro que bate), nunca uma coleção. 
// Por isso não precisa de [].

// document.querySelectorAll('td') 
// → retorna uma coleção de todos os que batem. 
// Precisaria de [0] se quisesse o primeiro.

//Formulários indexados
//document.forms['search-person']
//foi feito pra te dar um elemento

// let formSearch = document.forms['search']
// let inputFirst = formSearch.querySelector('input')
// let inputLast = formSearch.querySelectorAll('input')
// alert(inputLast.length)


//https://javascript.info/searching-elements-dom

// 1. The table with `id="age-table"`.
let table = document.getElementById('age-table')

// 2. All label elements inside that table
table.getElementsByTagName('label')
// or
document.querySelectorAll('#age-table label')

// 3. The first td in that table (with the word "Age")
table.rows[0].cells[0]
// or
table.getElementsByTagName('td')[0]
// or
table.querySelector('td')

// 4. The form with the name "search"
// assuming there's only one element with name="search" in the document
let form = document.getElementsByName('search')[0]
// or, form specifically
document.querySelector('form[name="search"]')

// 5. The first input in that form.
form.getElementsByTagName('input')[0]
// or
form.querySelector('input')

// 6. The last input in that form
let inputs = form.querySelectorAll('input') // find all inputs
inputs[inputs.length-1] // take the last one