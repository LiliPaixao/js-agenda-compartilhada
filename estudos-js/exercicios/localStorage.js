const frutas = [{
    nome: 'banana',
    cor: 'amarela',
},
{
    nome: 'maçã',
    cor: 'vermelha',
},
{
    nome:'laranja',
    cor: 'verde',
}]

//salva
localStorage.setItem('minhaFrutas', JSON.stringify(frutas))

//pega
const frutasGuardadas = JSON.parse(localStorage.getItem('minhaFrutas'))
console.log(frutasGuardadas)