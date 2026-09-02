
//Repara na sequência que apareceu: #text, <div>, #text, <ul>, #text, <script>. Isso é o childNodes do body
// for ( let i = 0; i < document.body.childNodes.length; i++) {
//     console.log( document.body.childNodes[i] )

//div
// console.log(document.body.firstElementChild)

//ul
// console.log(document.body.firstElementChild.nextElementSibling)

//li 
// console.log(document.body.firstElementChild.nextElementSibling.lastElementChild)

//li com Pete
// console.log(document.body.firstElementChild.nextElementSibling.lastElementChild.textContent)



let table = document.querySelector('table')
for ( let i = 0 ; i < table.rows.length ; i++){
    let td = table.rows[i].cells[i]
    td.style.background = "red"
}

