# JavaScript — estudo e projeto

Este repositório guarda duas coisas **conceitualmente diferentes**, que hoje
convivem no mesmo lugar por conveniência, mas que já estão separadas por pasta:

| Pasta | O que é | Natureza |
|---|---|---|
| [`agenda-compartilhada/`](agenda-compartilhada/) | O **produto**: um planner de coordenação entre pais separados | Código |
| [`estudos-js/`](estudos-js/) | A **metodologia de estudo** com IA + o currículo e o material de apoio | Documentação e exercícios |

As duas pastas são **independentes**: nenhum arquivo de uma referencia a outra.
Só o que é do repositório inteiro (este README, o `.gitignore`, o `.vscode/`)
fica na raiz.

---

## As duas partes

### 1. `estudos-js/` — o *como*

A metodologia de aprender JavaScript com uma IA atuando como **tutor socrático**:
a IA nunca entrega a resposta pronta, só guia com perguntas até a conclusão vir
de quem está estudando.

Contém:

- `SKILL.md` — a metodologia escrita como skill do Claude Code: a regra de nunca
  dar a resposta, o formato padrão de exercício HTML (funções vazias com `// TODO`),
  os erros conceituais já mapeados e onde cada tipo de explicação deve morar.
- `plano-js.html` — o plano de estudos interativo: 83 dias em 4 fases, com
  checkbox por dia e o roadmap do projeto amarrado ao currículo.
- `docs/` — material explicativo geral: as **referências vivas por tema**
  (`referencia-*.md`), que crescem toda vez que um conceito confuso é entendido,
  mais o material de preparação técnica.
- `exercicios/` — a prática do currículo, um arquivo HTML por dia.

Isso é conteúdo e método. Não é código de produto — serviria igual se o projeto
prático fosse outro.

### 2. `agenda-compartilhada/` — o *o quê*

O projeto prático que evolui junto com o currículo: hoje é front puro com
`localStorage`, e no roadmap passa por API externa, classes, módulos, TypeScript
e React + deploy.

Detalhes, etapas e roadmap completo: [`agenda-compartilhada/README.md`](agenda-compartilhada/README.md).

---

## Como elas se relacionam

O estudo **alimenta** o produto, mas o produto **não depende** do estudo para existir.

```
estudos-js/plano-js.html   →  define o que se aprende no Dia N
estudos-js/exercicios/     →  onde o conceito do Dia N é praticado isolado
        ↓
agenda-compartilhada/      →  onde o conceito vira funcionalidade de verdade
```

Cada bloco do currículo termina numa etapa da Agenda: a Fase DOM termina no
calendário visual, a fase de async termina na integração com a API de feriados,
e assim por diante. Nada do que é estudado é jogado fora.

A dependência é **só conceitual** — em disco, nenhum arquivo de `agenda-compartilhada/`
importa, lê ou aponta para nada dentro de `estudos-js/`, nem o contrário.

---

## Por que um repositório só (por enquanto)

Manter tudo junto hoje é mais simples: um `git clone`, um histórico, uma
linha do tempo mostrando estudo e projeto avançando lado a lado.

A estrutura de pastas já foi desenhada para que a separação futura seja trivial.
Quando a Agenda virar produto de verdade, cada pasta pode virar um repositório
próprio **sem reescrever histórico**:

```bash
# extrai uma pasta com todo o histórico dela, preservando os commits
git subtree split --prefix=agenda-compartilhada -b agenda-standalone
```

Ou, se preservar o histórico não importar, basta copiar a pasta — ela já é
autocontida. As duas condições que tornam isso possível estão valendo desde o
primeiro commit:

1. Nenhum arquivo cruzado entre as duas pastas.
2. Cada pasta tem o próprio `README.md` e faz sentido sozinha.

**Regra para manter isso verdadeiro:** nunca criar um arquivo em uma pasta que
dependa de um caminho dentro da outra. Se algo precisar ser compartilhado, ou
duplica, ou sobe para a raiz.

---

## Como abrir

Não tem build nem instalação — é HTML e JavaScript puro, aberto direto no navegador.

```bash
# o planner, etapa atual
xdg-open agenda-compartilhada/etapa2/index.html

# o plano de estudos
xdg-open estudos-js/plano-js.html

# um exercício do currículo
xdg-open estudos-js/exercicios/31-formularios.html
```

---

## Estado atual

📍 **Dia 32 de 80** — Fase 2 (DOM & Async) · **Etapa 2** da Agenda (calendário visual).
