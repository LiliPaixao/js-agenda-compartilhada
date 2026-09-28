# Referência — Escopo, closure e a "foto desatualizada"

Consolidado a partir de um bug do botão ✅ em `criarMes()` (Etapa 2 do Agenda Compartilhada).

> 📅 **Assunto do Dia 44 do plano — Escopo, hoisting e closure.** Este bug apareceu antes da hora; quando chegar no Dia 44, volte aqui.

---

## 0. O sintoma

Clicar no ✅ de um evento mudava o status dele, mas a **cor do dia não mudava** (ou ficava vermelha). Só depois de recarregar a página a cor ficava certa.

Eram **dois bugs empilhados**, e os dois têm a ver com o que uma função enxerga quando roda **depois** de ter sido criada.

---

## 1. Closure — a função lembra a VARIÁVEL, não o valor

Uma função criada dentro de outra consegue ler as variáveis de fora — isso é **closure**. Mas ela não tira cópia do valor na hora em que foi criada: ela guarda uma **ligação com a variável**. Quando roda, lê o que a variável vale **naquele momento**.

```js
let color = 'red'
const show = () => console.log(color)

color = 'green'
show()   // 'green' — leu a variável na hora de rodar, não na hora de ser criada
```

Um listener é exatamente isso: uma função criada agora e executada lá na frente, no clique.

---

## 2. Bug 1 — variável sem `let` dentro do loop

### O código com bug

```js
for (let i = 1; i <= ultimoDia; i++) {
  date = `${ano}-${String(mes+1).padStart(2,'0')}-${String(i).padStart(2,'0')}`  // SEM let/const
  const dates = searchByDate(date)
  // ...
  confirmarEvento.addEventListener('click', function(){
    const datesAtualizados = searchByDate(date)   // ← lê date no momento do clique
    porcentagemConfirmados(datesAtualizados, div)
  })
}
```

Atribuir a um nome que nunca foi declarado **cria uma variável global** (`window.date`). Existe **uma só**, compartilhada por todos os dias, reescrita a cada volta do loop — 365 vezes quando o ano inteiro é montado. Quando o loop termina, ela vale `'2026-12-31'`.

Todos os listeners guardam ligação com **essa mesma** variável. No clique, todos leem `'2026-12-31'` → `searchByDate('2026-12-31')` → `[]`.

**Por que a cor da página funcionava ao carregar?** Porque o `searchByDate(date)` de fora do listener roda **durante** a volta do loop, quando `date` ainda tem o valor certo. Só o código que roda **depois** (o clique) é que pega o valor final.

### A correção

```js
let date = `${ano}-${String(mes+1).padStart(2,'0')}-${String(i).padStart(2,'0')}`
```

`let` (ou `const`) dentro do bloco do loop cria uma **variável nova em cada volta**. Cada listener fica ligado à variável da sua própria volta.

> 🧠 **Analogia:** sem `let` é um **quadro branco único** — apagado e reescrito a cada dia; quem olhar no fim só vê o último. Com `let` é um **post-it colado em cada dia** — cada um guarda o seu.

### Teste no console — reproduzindo o bug

Cole no console (cada bloco separado):

```js
// ❌ sem let — uma variável global só
const buggyClicks = []
for (let i = 1; i <= 3; i++) {
  day = `2026-12-0${i}`                 // sem declaração → window.day
  buggyClicks.push(() => console.log(day))
}
buggyClicks.forEach(click => click())
// 2026-12-03
// 2026-12-03
// 2026-12-03   ← todos mostram o último valor
console.log(window.day)                 // '2026-12-03' — virou global mesmo
```

```js
// ✅ com let — uma variável nova por volta
const fixedClicks = []
for (let i = 1; i <= 3; i++) {
  let fixedDay = `2026-12-0${i}`
  fixedClicks.push(() => console.log(fixedDay))
}
fixedClicks.forEach(click => click())
// 2026-12-01
// 2026-12-02
// 2026-12-03   ← cada um lembra o seu
console.log(typeof fixedDay)            // 'undefined' — não vazou pra fora do loop
```

A mesma coisa com `setTimeout` (a função roda depois que o loop já acabou, igual ao clique):

```js
for (let i = 1; i <= 3; i++) {
  timeoutDay = `2026-12-0${i}`          // ❌ sem let
  setTimeout(() => console.log('bug:', timeoutDay), 100)
}
// bug: 2026-12-03  (3 vezes)

for (let i = 1; i <= 3; i++) {
  let okDay = `2026-12-0${i}`           // ✅ com let
  setTimeout(() => console.log('ok:', okDay), 100)
}
// ok: 2026-12-01 / ok: 2026-12-02 / ok: 2026-12-03
```

> ⚠️ Esse "cria global sem avisar" só acontece fora do **modo estrito**. Com `'use strict'` no topo do arquivo (ou dentro de `<script type="module">`), `date = ...` sem declaração dá `ReferenceError: date is not defined` — o bug apareceria na hora, em vez de silenciosamente.

---

## 3. Bug 2 — a "foto desatualizada"

### O código com bug

```js
const dates = searchByDate(date)     // roda UMA vez, quando a página carrega
porcentagemConfirmados(dates, div)

confirmarEvento.addEventListener('click', function(){
  updateEvent(evento.id, { status: novoStatus })
  porcentagemConfirmados(dates, div)  // ❌ usa a foto tirada no carregamento
})
```

`searchByDate` devolve um **array novo** com os eventos daquele dia — uma **foto** de `events` naquele instante.

Depois, `updateEvent` não altera o objeto antigo: ele cria um objeto novo com spread e um array novo com `map`:

```js
let eventFoundUpdated = { ...eventFounds, ...changes, /* ... */ }  // objeto NOVO
events = events.map(item => item.id === id ? eventFoundUpdated : item)  // array NOVO
```

Resultado: `events` agora aponta para o objeto novo (`status: 'confirmado'`), mas `dates` continua segurando o **objeto antigo** (`status: 'pendente'`). `porcentagemConfirmados` calculava com o status velho. No reload, `searchByDate` roda de novo e tira uma foto nova — por isso aí ficava certo.

### A correção — tirar uma foto nova antes de calcular

```js
confirmarEvento.addEventListener('click', function(){
  updateEvent(evento.id, { status: novoStatus })
  const datesAtualizados = searchByDate(date)   // foto nova, com o status atual
  porcentagemConfirmados(datesAtualizados, div)
})
```

(Isso só funciona **junto** com a correção do Bug 1 — senão a foto nova é do dia `'2026-12-31'` e vem `[]`.)

### Teste no console — reproduzindo a foto velha

```js
{
  let events = [{ id: 1, date: '2026-07-01', status: 'pending' }]
  const searchByDate = d => events.filter(e => e.date === d)

  const dates = searchByDate('2026-07-01')        // foto tirada agora

  // atualização no estilo do updateEvent: objeto novo + array novo
  events = events.map(e => e.id === 1 ? { ...e, status: 'confirmed' } : e)

  console.log(dates.map(e => e.status))                      // ['pending']   ← foto velha
  console.log(searchByDate('2026-07-01').map(e => e.status)) // ['confirmed'] ← foto nova
  console.log(dates[0] === events[0])                        // false — são objetos diferentes
}
```

(As chaves `{ }` em volta criam um bloco: `let`/`const` ficam presos nele, então dá pra colar de novo sem erro de "already been declared".)

---

## 4. Observação — o problema não era acesso, era conteúdo

```js
const dates = searchByDate(date)

confirmarEvento.addEventListener('click', function(){
  console.log(dates)                          // ✅ funciona — closure enxerga o dates de fora
  const datesAtualizados = searchByDate(date) // variável NOVA, local a esta função
})
```

- A função do listener **consegue** ler `dates` — é closure, igual à seção 1.
- `const datesAtualizados` declarado dentro do listener é uma variável **local**: nasce a cada clique, só existe dentro daquela função, e não mexe no `dates` de fora.
- O `dates` de fora nunca estava inacessível. Ele só estava **com conteúdo antigo**, porque ninguém tirou outra foto.

> `const` não "congela" o array nem os objetos — só impede reatribuir o nome. O que deixou `dates` velho foi o `updateEvent` criar objetos **novos** em vez de alterar os antigos.

---

## 5. Como diagnostiquei

Três `console.log` dentro do listener, cada um mostrando uma parte do problema:

```js
console.log(dates.map(e => e.status))
// ['pendente']  — mas o evento já estava 'confirmado' em events
// → dates é uma foto velha (Bug 2)

console.log(datesAtualizados)
// []  — mesmo com o dia tendo eventos
// → searchByDate está recebendo a data errada

console.log(date)
// '2026-12-31'  — num dia de julho!
// → date é uma variável só, com o último valor do loop (Bug 1)
```

**Lição:** quando uma função que roda "depois" (listener, `setTimeout`, `.then`) se comporta estranho, logue **as variáveis de fora que ela usa**, lá dentro dela — é aí que aparece o valor que ela realmente está vendo.

---

## 6. Tabela resumo

| Situação | Quantas variáveis existem? | O que o listener lê no clique | Sintoma | Correção |
|---|---|---|---|---|
| Variável global sem `let` (`date = ...`) | **uma** para o loop inteiro (`window.date`) | o **último** valor do loop (`'2026-12-31'`) | `searchByDate(date)` → `[]` | declarar com `let`/`const` dentro do loop |
| `let` dentro do loop (`let date = ...`) | **uma por volta** | o valor **da sua própria volta** | — (correto) | — |
| Variável capturada com valor antigo (`const dates = searchByDate(date)`) | uma por volta, mas preenchida **uma vez só** | a **foto** do carregamento (objetos antigos) | status/cor desatualizados até o reload | buscar de novo dentro do listener: `searchByDate(date)` |

| Conceito | Em uma frase |
|---|---|
| closure | a função interna lê variáveis de fora — o valor **atual**, não uma cópia |
| atribuir sem declarar | cria global (modo não estrito) ou `ReferenceError` (modo estrito) |
| `let`/`const` no corpo do loop | variável nova a cada volta |
| variável declarada dentro da função | local — nasce e morre a cada chamada |
| spread (`{...obj}`) / `map` | criam objeto/array **novos**; quem guardou o antigo continua com o antigo |
| `const` | impede reatribuir o nome, não congela o conteúdo |
