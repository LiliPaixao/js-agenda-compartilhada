//get element
//let elem = document.getElementById('elem')
// console.log(elem)

//elem.style.background = 'red'

//document.getElementById('elem')

// let elem = 5
// console.log(elem)

// let elements = document.querySelectorAll('ul > li:last-child');

// for (let elem of elements) {
//     alert(elem.innerHTML)
// }

//matches

// for (let elem of document.body.children) {
//     if (elem.matches('a[href*="http"]')){
//         alert("The archive reference: " + elem.href )
//     }
// }

// let chapter = document.querySelector('.chapter');

// alert(chapter.closest('.book'))

// alert(chapter.closest('.contents'))

// alert(chapter.closest('h1'))


// let inputs = table.getElementsByTagName('input')

// for (let input of inputs) {
//     alert (input.value + ': ' + input.checked )
// }

let form = document.getElementsByName('my-form')[0]
alert(form)

let articles = form.getElementsByClassName('article')
alert(articles.length)