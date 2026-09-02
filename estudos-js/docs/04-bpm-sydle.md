# 04 — Contexto da Empresa: BPM, SYDLE ONE e Ágil
### Por que isso importa para a LEVTY/SYDLE
A entrevista técnica da LEVTY **não é só código**. Eles avaliam se você
entende o contexto do negócio. Saber o que é BPM e SYDLE ONE coloca você
muito à frente de candidatos que só sabem programar.

---

## BPM — Business Process Management

### Em uma frase (use na entrevista)
> BPM é a disciplina de mapear, automatizar e melhorar continuamente os
> processos de uma empresa para que eles rodem de forma eficiente e rastreável.

### Exemplo concreto
Uma empresa de telecom precisa processar a solicitação de um novo cliente:
1. Cliente preenche formulário
2. Financeiro valida crédito
3. Técnico agenda instalação
4. Sistema ativa a linha

Sem BPM: cada passo é manual, em e-mail ou planilha. Difícil rastrear, cheio de gargalos.

Com BPM: o sistema define o fluxo, atribui tarefas automaticamente, manda alertas e grava o histórico de cada etapa.

### BPMN — a notação visual de BPM

| Elemento | Símbolo | O que é |
|---|---|---|
| Evento de início | ○ (borda simples) | Onde o processo começa |
| Evento de fim | ○ (borda grossa) | Onde termina |
| Tarefa | □ | Uma ação a ser feita |
| Gateway | ◇ | Uma decisão (sim/não, exclusivo, paralelo) |
| Pool/Lane | Retângulo grande | Representa um participante/área |

---

## SYDLE ONE — a plataforma que você vai usar

### O que é
SYDLE ONE é uma plataforma all-in-one que une num só lugar:

| Módulo | O que faz |
|---|---|
| **BPM** | Automatiza e monitora processos de negócio |
| **CRM** | Gestão de relacionamento com clientes |
| **ECM** | Gestão de documentos e conteúdo |
| **Analytics** | Dashboards e relatórios de desempenho |

### Sua posição como trainee dev
- Você vai **construir e personalizar fluxos** dentro da plataforma
- Vai escrever **scripts em JavaScript** para comportamentos customizados
- Vai usar **MongoDB** e **Elasticsearch** que ficam por baixo da plataforma
- Vai trabalhar em times organizados por módulo (BPM, CRM, etc.)

### Como os times funcionam (do relato de trainee)
> "Equipes de desenvolvimento lideradas por um Product Tech Lead, cada time
> atua em um módulo da plataforma buscando qualidade e inovação."

Ou seja: você vai entrar num time existente, aprender a plataforma e
contribuir com melhorias no módulo do time.

---

## Metodologias Ágeis (Scrum básico)

### Por que você precisa saber
A LEVTY trabalha com Scrum/Kanban. Na entrevista técnica eles podem perguntar
sobre como você organiza seu trabalho.

### Scrum em 5 conceitos

| Conceito | O que é |
|---|---|
| **Sprint** | Ciclo de trabalho (1-2 semanas) com entregas definidas |
| **Product Backlog** | Lista priorizada de tudo que precisa ser feito |
| **Sprint Backlog** | O que o time vai fazer nessa sprint |
| **Daily** | Reunião diária curta (15min): o que fiz, o que farei, algum bloqueio? |
| **Retrospectiva** | No fim da sprint: o que melhorar? |

### Kanban — o quadro visual

```
| A FAZER      | EM PROGRESSO  | REVISÃO      | CONCLUÍDO     |
|--------------|---------------|--------------|---------------|
| Tarefa 1     | Tarefa 3      | Tarefa 4     | Tarefa 2      |
| Tarefa 5     |               |              | Tarefa 6      |
```

---

## O que falar na entrevista técnica sobre a empresa

**Pergunta provável:** *"O que você sabe sobre a SYDLE e o que fazemos?"*

**Resposta preparada:**
> "A SYDLE é uma empresa de produto de tecnologia corporativa que desenvolveu
> a plataforma SYDLE ONE — uma solução all-in-one que integra BPM, CRM e
> Analytics para digitalizar processos de negócio de ponta a ponta. A LEVTY
> é o principal parceiro estratégico que implementa e personaliza essa
> plataforma para os clientes. O time de desenvolvimento trabalha com perfil
> full stack — JavaScript, Java, MongoDB — dentro de squads organizados por
> módulo da plataforma, usando metodologias ágeis."

---

## Checklist Contexto antes da entrevista

- [ ] Consigo explicar o que é BPM em 1 frase sem travar
- [ ] Sei o que é SYDLE ONE e seus módulos principais
- [ ] Sei o que é uma sprint e uma daily
- [ ] Entendo por que a SYDLE usa MongoDB (flexibilidade de documentos)
- [ ] Consigo explicar a relação LEVTY ↔ SYDLE
