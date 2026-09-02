# Estudos de JavaScript — metodologia e currículo

Como se aprende JavaScript aqui: currículo de **83 dias**, ~1–2h/dia, tendo o
[javascript.info](https://javascript.info) como fonte principal e uma IA atuando
como **tutor socrático**.

Esta pasta é conteúdo e método — não é código de produto. Serviria igual se o
projeto prático fosse outro.

---

## O princípio

> **Não receber a resposta pronta.**

Quando um código não funciona, a IA não conserta e devolve certo. Ela pede um
teste pontual no console (`console.log(typeof x)`), faz **uma** pergunta que
aponta para a linha do problema, e espera. Se o erro se repetir, a pergunta fica
mais precisa — mas a conclusão continua sendo de quem estuda.

A regra inteira, com o fluxo de atendimento a uma dúvida, o formato padrão de
exercício e a lista de erros conceituais já mapeados, está em [`SKILL.md`](SKILL.md).

---

## O que tem aqui

| Arquivo / pasta | O que é |
|---|---|
| [`SKILL.md`](SKILL.md) | A metodologia, escrita como skill do Claude Code |
| [`plano-js.html`](plano-js.html) | O plano interativo: 83 dias, 4 fases, checkbox por dia |
| [`docs/`](docs/) | Referências vivas por tema + material de preparação técnica |
| [`exercicios/`](exercicios/) | A prática do currículo, um arquivo por dia |

### O currículo

| Fase | Tema | Dias |
|---|---|---|
| 1 | Base sólida em JS | 1–20 |
| 2 | DOM, eventos e async | 21–43 |
| 3 | Fluência em JS | 44–63 |
| 4 | TypeScript & React | 64–83 |

📍 **Posição atual: Dia 32 — Fase 2.**

> O plano nasceu com 80 dias; hoje tem **83**, porque a Fase 2 ganhou dias extras
> no caminho. O número redondo aparece em textos antigos — o `plano-js.html` é a
> fonte de verdade.

### As referências vivas (`docs/`)

Um `.md` por tema do currículo. Não são anotações de aula: cada arquivo só cresce
quando um conceito **causou confusão de verdade e depois foi entendido**. O que
entra é o que quase deu errado.

- `referencia-selecao-dom.md` — seleção e manipulação do DOM, `DocumentFragment`, `children` vs `childNodes`
- `referencia-eventos.md` — `e.target` vs `e.currentTarget`, bubbling/capturing, delegation
- `referencia-calendario-datas.md` — `Date`, `getDay()` vs `getDate()`, `dataset`, `padStart`, CSS Grid
- `01-` a `05-*.md` — material de preparação técnica (Git, JS, Node, BPM, perguntas)

Regra: um arquivo por tema, nunca acumular tudo em um só. Explicação que só faz
sentido dentro do projeto da Agenda **não entra aqui** — fica junto do código dela.

### Os exercícios (`exercicios/`)

Formato padrão, um arquivo HTML autocontido por dia (`{dia}-{tema}.html`):

- uma `<section>` por subtópico, com elemento de demonstração e bloco `.task`
- botões que chamam funções JS
- as funções ficam **vazias, com `// TODO`** — a lógica é sempre escrita à mão
- `console.log` espelhado numa `<div id="log">` na página, sem precisar do DevTools

```bash
xdg-open exercicios/31-formularios.html
```

Os arquivos soltos (`*.js` e `26.*.html`) são material mais antigo, de antes do
padrão de um arquivo por dia.

---

## Sobre o `SKILL.md`

É uma skill do Claude Code. Para o Claude carregá-la automaticamente:

```bash
mkdir -p ~/.claude/skills/estudos-javascript
ln -s "$PWD/SKILL.md" ~/.claude/skills/estudos-javascript/SKILL.md
```

Ela é atualizada sempre que um novo erro conceitual aparece e é resolvido — a
lista de armadilhas dentro dela é o registro do que já foi aprendido do jeito difícil.

---

## Relação com o projeto

O projeto prático (`agenda-compartilhada/`, na raiz deste repositório) evolui em
paralelo: cada bloco do currículo termina virando uma etapa dele. A ligação é de
cronograma, não de arquivo — nada aqui depende de nada de lá.
