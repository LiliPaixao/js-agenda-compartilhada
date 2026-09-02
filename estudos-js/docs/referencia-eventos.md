# Referência — Eventos no DOM

## 1. `e.target` vs `e.currentTarget`

Quando um evento acontece, o objeto `e` (evento) tem duas propriedades que apontam para elementos — e elas **nem sempre são o mesmo elemento**:

| Propriedade | O que é |
|---|---|
| `e.target` | O elemento onde o clique aconteceu de verdade |
| `e.currentTarget` | O elemento onde o listener está registrado |

```js
card.addEventListener('click', function(e) {
  console.log(e.target)        // o que foi clicado (pode ser um filho)
  console.log(e.currentTarget) // sempre o .card — é onde o listener está
})
```

Quando você clica **diretamente** no elemento com o listener, os dois são iguais.
A diferença aparece quando você clica num **filho** desse elemento:

```js
// HTML:
// <div class="card">         ← listener aqui
//   <span>Texto do card</span>  ← usuário clica aqui
// </div>

card.addEventListener('click', function(e) {
  console.log(e.target)        // <span>Texto do card</span>
  console.log(e.currentTarget) // <div class="card">
})
```

**Regra prática:** quando você quer o elemento que tem o listener (e os dados dele, como `dataset.id`), use sempre `e.currentTarget`.

---

## 2. Bubbling — o evento sobe pela árvore

Quando você clica num elemento filho, o evento **sobe** pelos ancestrais — isso é bubbling.

```js
// HTML:
// <div id="pai">
//   <div id="filho">clique aqui</div>
// </div>

document.getElementById('pai').addEventListener('click', () => console.log('PAI'))
document.getElementById('filho').addEventListener('click', () => console.log('FILHO'))

// Ao clicar no filho, o console mostra:
// FILHO
// PAI
// (o evento sobe do filho pro pai)
```

---

## 3. `stopPropagation()` — parar o bubbling

Para o evento de subir para os ancestrais a partir daquele ponto.

```js
btnExcluir.addEventListener('click', function(e) {
  e.stopPropagation() // o clique não chega ao card pai
  card.remove()
})
```

Caso de uso clássico na Agenda Compartilhada: clicar no botão Excluir dentro de um card não deve disparar o listener do card (que abriria os detalhes).

---

## 4. `addEventListener` vs `onclick`

| | `addEventListener` | `onclick` |
|---|---|---|
| Múltiplos handlers | ✅ acumula | ❌ sobrescreve |
| `removeEventListener` | ✅ funciona com função nomeada | — |

```js
// addEventListener acumula — os dois rodam:
btn.addEventListener('click', handlerA)
btn.addEventListener('click', handlerB)

// onclick sobrescreve — só o último roda:
btn.onclick = handlerA
btn.onclick = handlerB  // handlerA foi perdido
```

---

## 5. `removeEventListener` — remover um listener

Precisa da **mesma referência de função** usada no `addEventListener`. Função anônima não funciona.

```js
// ❌ não funciona — são duas funções diferentes na memória
btn.addEventListener('click', function() { console.log('clique') })
btn.removeEventListener('click', function() { console.log('clique') })

// ✅ funciona — mesma referência
function handler() { console.log('clique') }
btn.addEventListener('click', handler)
btn.removeEventListener('click', handler)
```

---

## 6. Padrão comum: listener no `for` com `e.currentTarget`

Quando você adiciona listeners em vários elementos via `for`, cada elemento recebe seu próprio listener. `e.currentTarget` sempre aponta pro elemento certo — não pro primeiro, não pro último, mas pro que foi clicado.

```js
let cards = document.querySelectorAll('.card')

let handler = function(e) {
  let id = e.currentTarget.dataset.id  // pega o data-id do card clicado
  console.log(`Abrindo detalhes do evento ${id}`)
}

for (let card of cards) {
  card.addEventListener('click', handler)
}
```

Isso é diferente de `document.querySelector('.card').dataset.id` — que sempre pegaria o **primeiro** card, não o clicado.
