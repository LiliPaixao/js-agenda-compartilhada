# Agenda Compartilhada

Planner de coordenação entre dois responsáveis por uma criança — consultas,
reuniões de escola, apresentações — sem depender de conversa por mensagem.

---

## O problema

Dois responsáveis (ex-cônjuges, co-pais) combinam compromissos por WhatsApp e
esbarram sempre nas mesmas duas falhas:

1. **O combinado não fica registrado** — some no meio da conversa, é esquecido ou negado.
2. **Não há prova de aviso** — ninguém consegue mostrar que avisou o outro com antecedência.

A Agenda resolve os dois: cada evento carrega o registro de **quem criou** e
**quando** (`created_by`, `created_at`), e no roadmap ganha também registro de
visualização — a prova de que o outro viu.

Isso é o que separa este projeto de um to-do genérico: ele resolve uma dor
específica de um público específico.

> As regras de negócio completas estão em
> [`etapa1/agenda-compartilhada-regras.md`](etapa1/agenda-compartilhada-regras.md).

---

## Tecnologias hoje

Nenhuma dependência, nenhum build, nenhum framework — de propósito. Cada
tecnologia nova entra só quando o currículo chega nela.

| O quê | Como |
|---|---|
| Linguagem | JavaScript puro (ES6+) — sem transpilação |
| Persistência | `localStorage` + `JSON.stringify` / `JSON.parse` |
| Interface | HTML + CSS puro (CSS Grid no calendário) |
| Build | nenhum — abre o `.html` direto no navegador |
| Dependências | nenhuma |

### Modelo de dados

```js
{
  id: 1,                        // sequencial, imutável
  title: 'Reunião de escola',
  event_date: '2026-07-01',     // ISO, YYYY-MM-DD
  created_at: 1750000000000,    // timestamp, imutável
  created_by: 'Liliane'         // imutável
}
```

`id`, `created_at` e `created_by` são **campos protegidos**: não podem ser
alterados depois da criação.

---

## Estrutura

```
agenda-compartilhada/
├── README.md
├── agenda.js                 ← toda a lógica, compartilhada pelas etapas
├── etapa1/
│   ├── index.html               CRUD via console
│   └── agenda-compartilhada-regras.md
└── etapa2/
    └── index.html               calendário visual (etapa atual)
```

Cada etapa tem o próprio `index.html` e todas carregam o mesmo `agenda.js`
(`<script src="../agenda.js">`). As etapas antigas continuam abrindo — dá para
ver a evolução do projeto lado a lado, em vez de sobrescrever o que já funcionava.

---

## Como rodar

```bash
xdg-open etapa2/index.html   # etapa atual
xdg-open etapa1/index.html   # CRUD, usar pelo console do navegador
```

Sem servidor, sem `npm install`. Na Etapa 5, quando entrarem módulos ES6, vai
passar a ser necessário um servidor local (`npx serve`) — módulos não carregam
via `file://`.

### API atual (Etapa 1, pelo console)

```js
createEvent('Consulta médica', '2026-08-14', 'Liliane')
listEvents()
updateEvent(1, { title: 'Consulta remarcada' })
deleteEvent(1)
searchByTitle('consulta')
searchByDate('2026-08-14')
exportJSON()          // devolve a agenda inteira como string JSON
importJSON(str)       // substitui a agenda a partir de um JSON
criarMes(2026, 7)     // Etapa 2: monta a grade do mês
```

---

## Roadmap

Cada etapa fecha um bloco do currículo de estudos que acontece em paralelo
(`estudos-js/` na raiz deste repositório). A ligação é só de cronograma: nenhum
arquivo daqui depende de nada de lá — este roadmap se sustenta sozinho.

| Etapa | O que entra | O que se aprende | Status |
|---|---|---|---|
| **1** | CRUD de eventos, `localStorage`, busca por título e data, exportar/importar JSON | Base de JS: arrays, objetos, funções, JSON | ✅ feito |
| **2** | Calendário visual — grid de 7 colunas montado por JS, clique no dia para ver/adicionar evento | DOM, eventos, `Date`, `dataset`, delegation | 🚧 **atual** |
| **3** | API de feriados nacionais (BrasilAPI) no calendário, cache dos feriados em `localStorage`, loading state e tratamento de erro | `fetch`, promises, `async/await`, erro de rede | ⬜ |
| **4** | Refatoração com classes: `Evento`, `Agenda`, `Pessoa` | Classes, `this`, herança, encapsulamento | ⬜ |
| **5** | Separação em módulos ES6 (`Agenda`, `Evento`, `Pessoa`, `storage`) + sistema de perfis com login fake (JWT básico) | `import`/`export`, organização de código | ⬜ |
| **6** | Migração para TypeScript — tipar `Evento`, `Pessoa`, `Agenda` | Tipos, interfaces, generics | ⬜ |
| **Final** | UI reescrita em React + TypeScript (versão portfólio) + deploy no Vercel | React, componentes, estado, deploy | ⬜ |

### Depois do roadmap

A intenção é que o projeto **deixe de ser exercício e vire produto** — um planner
eletrônico de verdade, publicado e usável por quem tem o problema. O roadmap já
termina em algo publicável (React + TS + deploy), não num exercício de aula.

---

## Convenção do projeto

- Explicação de **regra de negócio ou decisão de produto** fica aqui dentro,
  junto do código que ela descreve.
- Explicação de **conceito de JavaScript** (que serviria em qualquer projeto)
  não entra aqui — vai para `estudos-js/docs/`.

Isso mantém a pasta autocontida: ela pode virar um repositório próprio a
qualquer momento sem deixar nada para trás.
