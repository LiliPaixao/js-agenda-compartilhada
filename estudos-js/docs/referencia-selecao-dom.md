# Referência — Seleção de elementos no DOM

## 0. O que é uma "coleção"?

Uma coleção é um **agrupamento de vários elementos** — como uma caixa com várias coisas dentro. Ela não é, ela mesma, um elemento: é o *conjunto*.

```js
let links = document.querySelectorAll('a[href]')
// links = a CAIXA TODA (a coleção). Dentro dela: vários <a>.
```

Por isso a coleção **não tem** os métodos/propriedades de um elemento individual, como `.getAttribute()`, `.style`, `.textContent`. Ela só tem coisas que fazem sentido pra um conjunto, como `.length` (quantos itens tem) e a possibilidade de ser percorrida.

```js
links.getAttribute('href')   // ❌ ERRADO — a caixa não tem href, ela é um conjunto de <a>
links.length                 // ✅ ok — quantos <a> tem na caixa
```

Pra acessar um elemento individual de dentro da coleção, você tem duas formas:

```js
links[0]                     // pega o primeiro item da caixa, por posição
for (let link of links) {    // percorre a caixa, entregando um item por vez em "link"
  link.getAttribute('href')  // ✅ agora sim — link é um elemento individual, tem getAttribute
}
```

**Resumindo a diferença de nomes:**
| Variável | O que é | Tem `.getAttribute()`? |
|---|---|---|
| `links` (a coleção) | o conjunto inteiro de `<a>` | ❌ não |
| `link` (dentro do `for`) | um único `<a>` de cada vez | ✅ sim |

Esse é o erro mais comum: chamar um método de elemento (`getAttribute`, `style`, etc.) direto na coleção (plural) em vez de no item individual (singular) dentro do loop.

---

A confusão mais comum (e você acabou de passar por ela): **métodos de seleção sempre retornam ELEMENTOS, nunca os valores dos atributos.** Se você quer o valor de um atributo, precisa de um segundo passo: `elemento.getAttribute('href')` ou `elemento.href`.

---

## 1. Retornam UM elemento só (ou `null`)

### `document.getElementById('id')`
```js
document.getElementById('titulo')
```
- Retorna o elemento com aquele `id`, ou `null` se não existir.
- Não usa `#`, só o nome puro do id.

### `document.querySelector('seletor-css')`
```js
document.querySelector('a')          // primeiro <a> da página
document.querySelector('.card')      // primeiro elemento com classe card
document.querySelector('#titulo')    // primeiro elemento com id titulo (aqui usa #)
document.querySelector('a[href]')    // primeiro <a> que TEM o atributo href
```
- Aceita **qualquer seletor CSS válido**.
- Retorna só o **primeiro** que bate, ou `null`.

### `elemento.closest('seletor-css')`
```js
botao.closest('.card')   // sobe na árvore a partir do botão até achar o ancestral .card
```
- Começa no próprio elemento e sobe pelos **pais**, retornando o primeiro ancestral (ou ele mesmo) que bate com o seletor.
- Retorna `null` se não achar nenhum.

### `elemento.matches('seletor-css')`
```js
if (link.matches('a[href]')) { ... }
```
- Não retorna um elemento — retorna `true`/`false`. Serve pra checar se **um elemento que você já tem** bate com um seletor. Muito usado dentro de event delegation.

---

## 2. Retornam uma COLEÇÃO de elementos (não um valor, não um array de strings)

### `document.querySelectorAll('seletor-css')`
```js
document.querySelectorAll('a')        // TODOS os <a>, com ou sem href
document.querySelectorAll('a[href]')  // só os <a> que TÊM href
document.querySelectorAll('.card')    // todos os elementos com classe card
```
- Retorna uma **NodeList** com todos os elementos que batem.
- Cada item da NodeList é um **elemento completo** (tem `.style`, `.textContent`, `.getAttribute()`, etc.) — não é o valor do atributo.
- NodeList tem `.length` e pode ser percorrida com `for...of` ou `.forEach()`, mas **não tem** `.map()`/`.filter()` direto (nos browsers mais novos `.forEach` funciona, mas pra usar `.map`/`.filter` normalmente você converte: `Array.from(lista)` ou `[...lista]`).
- Se o seletor não achar nada, retorna uma NodeList **vazia** (não é `null`).

### `document.getElementsByTagName('tag')`
```js
document.getElementsByTagName('li')
```
- Retorna uma **HTMLCollection** (parecida com NodeList, mas "viva" — se você adicionar/remover elementos do DOM depois, essa coleção atualiza automaticamente).
- Só aceita nome de tag, não seletor CSS completo.

### `document.getElementsByName('nome')`
```js
document.getElementsByName('genero')  // ex: radios com name="genero"
```
- Busca pelo atributo `name` (comum em inputs de formulário).

### `document.forms`
```js
document.forms                // todos os <form> da página
document.forms['meuFormulario']  // form específico pelo name/id
```

---

## 3. Como pegar o VALOR depois de ter o elemento

Depois de selecionar, você ainda precisa de um passo extra pra pegar o dado que quer:

```js
let link = document.querySelector('a[href]')

link                          // o elemento <a> inteiro
link.getAttribute('href')     // o valor CRU do atributo href (string do HTML)
link.href                     // a propriedade — geralmente a URL já resolvida/absoluta
link.textContent              // o texto visível dentro da tag
link.dataset.algumaCoisa      // valor de um atributo data-alguma-coisa
```

Com uma **coleção** (`querySelectorAll`, `getElementsByTagName`), você precisa entrar em cada item primeiro:

```js
let links = document.querySelectorAll('a[href]')

links.getAttribute('href')      // ❌ ERRADO — coleção não tem esse método
links[0].getAttribute('href')   // ✅ pega o href do primeiro elemento

for (let link of links) {
  console.log(link.getAttribute('href'))  // ✅ pega o href de cada um, um por vez
}
```

---

## 4. Tabela resumo

| Método | Retorna | Único ou coleção? | Aceita seletor CSS? |
|---|---|---|---|
| `getElementById` | elemento ou `null` | único | não (só id) |
| `querySelector` | elemento ou `null` | único | sim |
| `querySelectorAll` | NodeList | coleção | sim |
| `getElementsByTagName` | HTMLCollection (viva) | coleção | não (só tag) |
| `getElementsByName` | NodeList | coleção | não (só name) |
| `closest` | elemento ou `null` | único (sobe pra pais) | sim |
| `matches` | `true`/`false` | não retorna elemento | sim |

---

## 5. O porquê do `a[href]`

`tag[atributo]` é sintaxe de seletor CSS: seleciona elementos daquela tag que **possuem** o atributo (não importa o valor, só que ele exista).

```js
document.querySelectorAll('a').length        // conta TODOS os <a>, mesmo sem href
document.querySelectorAll('a[href]').length  // conta só os que TÊM href
```

Isso importa porque `<a>` pode existir sem `href` — por exemplo `<a name="ancora">texto</a>` é usado como marcador/ancoragem, não como link. Se você não filtrar com `[href]`, seu código pode tentar ler `.getAttribute('href')` de um elemento que não tem esse atributo e receber `null`, quebrando qualquer lógica que espera uma string (tipo `.includes("://")`).

---

## 6. Resumo — Dia 26: modificar o documento (criar, inserir, remover)

Depois de selecionar elementos, o próximo passo é criar e inserir novos elementos no DOM. Alguns pontos que causaram confusão na prática e vale reforçar:

### Criar e inserir
```js
let li = document.createElement('li')   // cria vazio, ainda não está na página
li.append('texto')                       // insere conteúdo DENTRO do elemento
ol.append(li)                            // insere o elemento DENTRO de outro (no final)
ol.prepend(li)                           // insere no início
elemento.before(li)                      // insere ANTES do elemento (mesmo nível, como irmão)
elemento.after(li)                       // insere DEPOIS do elemento (mesmo nível, como irmão)
```
- `.append()`/`.prepend()` inserem **dentro** do elemento (como filho).
- `.before()`/`.after()` inserem **ao lado** do elemento (como irmão), não dentro dele.

### `document.body` também é só um elemento — mesma lógica de `.append()`
```js
let ul = document.createElement('ul')   // criado na memória, ainda invisível
// ... preenche a ul com <li>s ...
document.body.append(ul)                // só agora ela aparece na página
```
`document.body` não é especial pra fins de inserção: é só mais um elemento que aceita `.append()`, `.prepend()`, etc., igual `ol` ou qualquer outro. Padrão comum quando você monta uma estrutura inteira (como uma `<ul>` com vários `<li>`) na memória primeiro, e só insere tudo de uma vez no final, depois que já está completa.

### `.before()`/`.after()`/`.append()` com STRING vs com ELEMENTO
```js
div.before('<p>Hello</p>')                     // ❌ vira TEXTO puro, aparece com <p> visível na tela
div.before(document.createElement('hr'))       // ✅ elemento real, funciona
```
Passar uma string pra esses métodos não transforma em HTML — vira texto cru. Pra ter um elemento de verdade, primeiro cria com `createElement`, define o conteúdo, e só depois insere a variável.

### Métodos de inserção NÃO retornam o elemento inserido
```js
let x = divp.before(document.createElement('p'))
console.log(x)   // undefined
```
Mesmo padrão de `array.push()` (que retorna o novo tamanho, não o array). Solução: crie o elemento numa variável **antes**, preencha, e só então insira essa variável.

### Cuidado com nomes de variável iguais ao `id`
Elementos com `id` no HTML ficam acessíveis como variável global com esse nome. Se você criar `let div = document.createElement('div')` e já existir `<div id="div">` no HTML, os dois nomes colidem — a variável `div` do JS "ganha" e esconde a referência ao elemento do HTML. Solução: dar `id`s diferentes dos nomes de variáveis que você planeja usar (ex: `id="divp"` em vez de `id="div"`).

### `insertAdjacentHTML` não devolve referência
```js
div.insertAdjacentHTML('beforebegin', `<div class="alert">...</div>`)
```
Isso insere a nova div no DOM, mas **não** guarda nenhuma variável apontando pra ela — se quiser manipular/remover depois, dê um `id` a ela na própria string e busque com `document.querySelector('#esse-id')`.

### `DocumentFragment` — um "invólucro invisível"
```js
let fragment = new DocumentFragment()   // não é um elemento, nunca aparece na tela sozinho
fragment.append(li1)
fragment.append(li2)
ul.append(fragment)   // o fragment "se dissolve": só o CONTEÚDO dele entra na ul
```
Serve pra montar vários nós na memória antes de inserir todos de uma vez. Depois do `append`, o fragment fica vazio (o conteúdo foi "transferido" pra `ul`).

### Alternativa mais comum: array + spread
```js
function getListContent(){
  let result = []
  for (let i=1; i<=3; i++){
    let li = document.createElement('li')
    li.append(i)
    result.push(li)
  }
  return result
}
ul.append(...getListContent())   // ✅ "espalha" o array em argumentos separados
ul.append(getListContent())      // ❌ vira texto: "[object HTMLLIElement],[object HTMLLIElement]"
```
`.append()` aceita vários argumentos separados, mas não sabe processar um único array como "vários itens pra inserir" — sem o spread, ele converte o array pra texto. Mesmo princípio de `Math.max(...array)`.

---

## 7. `children` vs `childNodes` (e `firstChild` vs `firstElementChild`)

Mesma lógica do par `firstChild`/`firstElementChild` que você já viu — só que aplicada à lista completa de filhos, não só ao primeiro.

```js
elemento.childNodes   // TODOS os nós filhos: elementos, texto, comentários
elemento.children     // só os filhos que são ELEMENTOS (pula texto e comentários)
```

Exemplo prático, com espaços/texto solto entre tags (bem comum, porque quebras de linha no HTML já contam como nó de texto):

```html
<body>
  aaa
  <table id="table">...</table>
</body>
```

```js
document.body.childNodes   // inclui o nó de texto "aaa" (e possíveis \n de formatação)
document.body.children     // pula "aaa", só lista elementos de verdade (ex: <table>, <script>)
```

**Resumo:**

| Propriedade | O que inclui | Tipo de coleção |
|---|---|---|
| `childNodes` | todos os nós (elemento, texto, comentário) | NodeList |
| `children` | só elementos | HTMLCollection |
| `firstChild` | primeiro nó, seja qual for o tipo | nó único |
| `firstElementChild` | primeiro filho que é elemento | elemento único |
| `lastChild` / `lastElementChild` | mesma lógica, mas o último | — |

Regra prática: se você quer **manipular/estilizar** (precisa que seja elemento) → use as versões com "Element" (`children`, `firstElementChild`). Se você quer **inspecionar tudo que existe ali**, incluindo texto solto (como no caso do "aaa" que sobrou depois do `table.remove()`) → use as versões sem "Element" (`childNodes`, `firstChild`).
