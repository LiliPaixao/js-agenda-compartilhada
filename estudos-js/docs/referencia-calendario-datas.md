# Referência — Datas, grid de calendário e `dataset`

Consolidado a partir da função `criarMes()` (Etapa 2 do Agenda Compartilhada, Dia 32).

---

## 1. `new Date(ano, mes, dia)` — dois zero-indexados se cruzando

O construtor `new Date` tem duas armadilhas que se somam:

1. **`mes` é 0-indexado**: `0` = janeiro, `11` = dezembro.
2. **`dia = 0` não existe**: ele significa "o dia anterior ao dia 1", ou seja, o **último dia do mês ANTERIOR**.

```js
new Date(2026, 0, 1)   // 1 jan 2026  → mes 0 é janeiro
new Date(2026, 0, 0)   // 31 dez 2025 → dia 0 volta um mês inteiro!
```

O truque `dia = 0` é ótimo pra descobrir quantos dias tem um mês (o JS já sabe de ano bissexto). Mas justamente por ele voltar um mês, você precisa passar `mes + 1`:

```js
// ❌ ERRADO — devolve o último dia do mês ANTERIOR
new Date(ano, mes, 0).getDate()

// ✅ CERTO — dia 0 do mês SEGUINTE = último dia do mês que eu quero
new Date(ano, mes + 1, 0).getDate()
```

### Por que o bug é difícil de ver

Teste no console com `mes = 0` (janeiro) — os dois dão **31**, e parece que está tudo certo:

```js
new Date(2026, 0, 0).getDate()   // 31  ← mas isso é 31 de DEZEMBRO/2025
new Date(2026, 1, 0).getDate()   // 31  ← esse sim é 31 de JANEIRO/2026
```

O erro só aparece a partir de fevereiro. Rode isso no console pra ver a lista inteira deslocada em um mês:

```js
for (let mes = 0; mes < 12; mes++) {
  console.log(mes, 'sem +1:', new Date(2026, mes, 0).getDate(),
                   '| com +1:', new Date(2026, mes + 1, 0).getDate())
}
```

| `mes` | Mês que eu quero | `new Date(2026, mes, 0)` ❌ | `new Date(2026, mes+1, 0)` ✅ | Dias reais |
|---|---|---|---|---|
| 0 | janeiro | 31 | 31 | 31 |
| 1 | fevereiro | 31 | 28 | 28 |
| 2 | março | 28 | 31 | 31 |
| 3 | abril | 31 | 30 | 30 |
| 4 | maio | 30 | 31 | 31 |
| 5 | junho | 31 | 30 | 30 |
| 6 | julho | 30 | 31 | 31 |
| 7 | agosto | 31 | 31 | 31 |
| 8 | setembro | 31 | 30 | 30 |
| 9 | outubro | 30 | 31 | 31 |
| 10 | novembro | 31 | 30 | 30 |
| 11 | dezembro | 30 | 31 | 31 |

Repare: a coluna errada é a coluna certa **empurrada uma linha pra baixo**. Janeiro e agosto batem por coincidência (o mês anterior a eles também tem 31 dias) — por isso testar só com janeiro esconde o bug.

### E dezembro, com `mes + 1 = 12`?

Não quebra. O `Date` faz *rollover* automático: mês 12 vira janeiro do ano seguinte, e o dia 0 desse mês volta pro último dia de dezembro.

```js
new Date(2026, 12, 0)   // Thu Dec 31 2026 ✅
```

Esse mesmo rollover vale pra qualquer estouro: `new Date(2026, 0, 32)` vira 1 de fevereiro.

### `getDay()` — dia da semana (0 a 6, nunca 7)

```js
new Date(2026, 0, 1).getDay()   // 4 → 1 de janeiro de 2026 é quinta-feira
```

| Retorno | Dia |
|---|---|
| 0 | domingo |
| 1 | segunda |
| 2 | terça |
| 3 | quarta |
| 4 | quinta |
| 5 | sexta |
| 6 | sábado |

Não existe `7`. A semana fecha em `6` (sábado) e volta pro `0`.

**Não confunda:**

| Método | Devolve |
|---|---|
| `getDate()` | o **número do dia no mês** (1–31) |
| `getDay()` | o **dia da semana** (0–6) |
| `getMonth()` | o mês, 0-indexado (0–11) |
| `getFullYear()` | o ano com 4 dígitos |

---

## 2. Padrão: células vazias antes dos dados reais

Problema: uma grid de 7 colunas preenche sempre da esquerda pra direita. Se o dia 1 do mês cai numa quinta-feira, colocar o dia 1 como primeiro elemento joga ele na coluna de domingo — e o mês inteiro fica desalinhado.

A solução é **empurrar** o dia 1 até a coluna certa inserindo células vazias antes dele. Quantas? Exatamente o número que `getDay()` devolve, porque `getDay()` já é a posição (0-indexada) da coluna onde o dia 1 precisa cair.

```js
const diaSemanaInicio = new Date(ano, mes, 1).getDay()   // 4 = quinta

// 4 divs vazias ocupam dom, seg, ter, qua...
for (let diaVazio = 0; diaVazio < diaSemanaInicio; diaVazio++) {
  let div = document.createElement('div')
  div.textContent = ''
  diasMes = [...diasMes, div]
}
// ...e o dia 1 cai na 5ª coluna (quinta). ✅
```

Como o `for` roda de `0` até `diaSemanaInicio - 1`, ele cria **exatamente** `diaSemanaInicio` divs. Se o mês começa no domingo, `getDay()` é `0`, o loop não roda nenhuma vez, e o dia 1 já está na coluna certa — sem `if` extra.

### Por que as células vazias NÃO recebem `dataset.date`

É o que diferencia "buraco" de "dia de verdade" depois, na hora de tratar clique:

```js
calendario.addEventListener('click', (e) => {
  const dia = e.target.closest('#calendario > div')
  if (!dia || !dia.dataset.date) return   // célula vazia → ignora
  console.log('clicou em', dia.dataset.date)
})
```

### Complemento: células vazias DEPOIS do último dia

Se você empilha vários meses na mesma grid (como está hoje, com os 12 meses no mesmo `#calendario`), o próximo mês continua na mesma linha em que o anterior parou. Pra cada mês começar numa linha nova, o mesmo raciocínio vale no fim:

```js
const totalCelulas = diaSemanaInicio + ultimoDia
const sobra = (7 - (totalCelulas % 7)) % 7   // quantas faltam pra fechar a linha
```

O `% 7` de fora existe pra quando a linha já fecha certinho: sem ele, você acrescentaria 7 células vazias inúteis.

**Regra geral do padrão:** *offset no começo alinha o primeiro item; padding no fim fecha o bloco.* Serve pra qualquer grid de tamanho fixo — calendário, paginação de galeria, tabuleiro.

---

## 3. `dataset` — ler vs atribuir

`dataset` é a ponte entre um elemento na tela e o dado que ele representa. Ele lê e escreve atributos `data-*` do HTML.

```js
// ATRIBUIR — cria/atualiza o atributo no HTML
div.dataset.date = '2026-01-15'
// o HTML vira: <div data-date="2026-01-15">15</div>

// LER — devolve o valor
div.dataset.date              // '2026-01-15'
```

### Conversão de nome: camelCase no JS ↔ kebab-case no HTML

| No JS (`dataset`) | No HTML |
|---|---|
| `dataset.date` | `data-date` |
| `dataset.eventId` | `data-event-id` |
| `dataset.createdBy` | `data-created-by` |

A conversão é automática nos dois sentidos. Você **nunca** escreve `data-` no `dataset`, e nunca escreve camelCase no HTML.

### O valor é SEMPRE string

```js
div.dataset.id = 3
typeof div.dataset.id     // 'string'  ← virou "3"
div.dataset.id === 3      // false ❌
div.dataset.id === '3'    // true  ✅
Number(div.dataset.id) === 3   // true ✅ — converta antes de comparar
```

Isso importa direto no `agenda.js`: os `id` dos eventos são **número**, então `events.find(n => n.id === e.target.dataset.id)` nunca acha nada. Precisa de `Number(...)`.

Já `event_date` é string no formato `'AAAA-MM-DD'`, então bate direto com `dataset.date` — sem conversão. Foi pra isso que o `padStart` entrou (ver seção 4).

### Chave que não existe → `undefined`

```js
divVazia.dataset.date     // undefined (não dá erro, não é null)
'date' in divVazia.dataset  // false — jeito explícito de checar
delete div.dataset.date   // remove o atributo data-date do HTML
```

### Comparação com `getAttribute`

```js
div.dataset.date              // forma curta, só pra data-*
div.getAttribute('data-date') // forma longa, mesma coisa
div.setAttribute('data-date', '2026-01-15')  // equivale a div.dataset.date = ...
```

| | `dataset` | `getAttribute`/`setAttribute` |
|---|---|---|
| Serve pra | só atributos `data-*` | qualquer atributo |
| Nome | camelCase, sem prefixo | string completa, com `data-` |
| Não existe | `undefined` | `null` |

---

## 4. `padStart` — zero à esquerda

`padStart(tamanho, preenchimento)` completa uma **string** até o tamanho pedido, adicionando caracteres no **início**.

```js
String(3).padStart(2, '0')    // '03'
String(12).padStart(2, '0')   // '12'  ← já tem 2, não mexe
String(2026).padStart(2, '0') // '2026' ← maior que o tamanho, não corta
```

Dois detalhes:

- É método de **string**, não de número. `(3).padStart` dá erro — por isso o `String(...)` em volta.
- Se já estiver no tamanho ou maior, ele não faz nada (nunca trunca).

Existe o par `padEnd(2, '0')`, que preenche do outro lado: `String(3).padEnd(2,'0')` → `'30'`.

### Por que isso importa no calendário

O formato `AAAA-MM-DD` (ISO) exige 2 dígitos no mês e no dia. Sem `padStart`, a data sai quebrada:

```js
const ano = 2026, mes = 0, i = 5

// ❌ sem padStart
`${ano}-${mes + 1}-${i}`    // '2026-1-5'

// ✅ com padStart
`${ano}-${String(mes + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`   // '2026-01-05'
```

`'2026-1-5'` não bate com o `event_date: '2026-01-05'` guardado nos eventos — e qualquer `find`/`filter` por data falharia em silêncio nos 9 primeiros dias de cada mês e nos 9 primeiros meses do ano. Também é o formato que faz datas ordenarem certo como texto (`'2026-01-05' < '2026-01-12'` é `true`).

Repare no `mes + 1` de novo aqui — mas por outro motivo: na seção 1 era pra compensar o "dia 0"; aqui é só pra converter mês 0-indexado do JS pro mês humano (1–12) que vai no texto da data.

---

## 5. CSS Grid: `repeat()` e `fr`

```css
#calendario {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
}
```

### `fr` — fração do espaço disponível

`fr` não é uma medida fixa como `px` ou `%`: é uma **fatia do espaço que sobrou** depois de descontar `gap`, `padding` etc. `1fr` em todas as 7 colunas = 7 colunas de largura igual, que se ajustam sozinhas quando a janela muda.

```css
grid-template-columns: 1fr 1fr;   /* duas colunas iguais */
grid-template-columns: 2fr 1fr;   /* a primeira fica com o dobro da segunda */
grid-template-columns: 200px 1fr; /* primeira fixa, segunda ocupa o resto */
```

### `repeat()` — só encurta a escrita

```css
grid-template-columns: repeat(7, 1fr);
/* é exatamente o mesmo que: */
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
```

O primeiro argumento é quantas vezes, o segundo é o que repetir. Aceita padrão com mais de um valor: `repeat(3, 100px 1fr)` gera 6 colunas alternadas.

### Por que só as COLUNAS são declaradas

`grid-template-columns` define 7 colunas. As **linhas não são declaradas** — o grid cria quantas precisar automaticamente (linhas implícitas), quebrando a cada 7 elementos.

É isso que faz o `criarMes()` funcionar sem calcular linha nenhuma: o JS só joga divs na ordem com `calendario.append(...mesJaneiro)`, e o CSS quebra de 7 em 7 sozinho. Um mês de 31 dias com 4 vazias na frente = 35 células = 5 linhas, sem ninguém ter contado isso.

Teste no console pra ver as linhas nascendo:

```js
getComputedStyle(calendario).gridTemplateColumns   // as 7 larguras já calculadas em px
getComputedStyle(calendario).gridTemplateRows      // as linhas que o grid criou sozinho
```

### `gap`

`gap: 6px` é o espaço **entre** as células — não é `margin`, e não cria borda nas pontas da grid.

---

## 6. Tabela resumo

| Coisa | O que faz | Pegadinha |
|---|---|---|
| `new Date(a, m, d)` | cria uma data | `m` é 0-indexado (0 = janeiro) |
| `new Date(a, m + 1, 0)` | último dia do mês `m` | sem o `+1` devolve o mês anterior |
| `.getDate()` | dia do mês (1–31) | não confundir com `getDay` |
| `.getDay()` | dia da semana (0–6) | domingo é `0`; não existe `7` |
| células vazias no início | alinham o dia 1 na coluna certa | a quantidade é o próprio `getDay()` |
| `dataset.x = v` | cria `data-x="v"` no HTML | guarda sempre como **string** |
| `dataset.x` | lê `data-x` | `undefined` se não existir (não `null`) |
| `String(n).padStart(2,'0')` | zero à esquerda | é método de string; nunca trunca |
| `repeat(7, 1fr)` | 7 colunas iguais | atalho de `1fr 1fr 1fr...` |
| `1fr` | fatia do espaço livre | fluido, não é medida fixa |
| linhas do grid | criadas sozinhas | só as colunas precisam ser declaradas |
