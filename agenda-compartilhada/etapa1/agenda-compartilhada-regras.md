# Agenda Compartilhada — Regras de Negócio

> Documento de referência para o projeto. Atualizar conforme o produto evolui.

---

## Contexto e problema real

Dois responsáveis por uma criança (ex-cônjuges, co-pais) precisam coordenar compromissos sem depender de WhatsApp. Os problemas centrais são dois:

1. **Compromissos não registrados formalmente** — combinados verbalmente ou por mensagem se perdem, são negados ou esquecidos.
2. **Ausência de prova de aviso** — não há como comprovar que o outro foi avisado com antecedência suficiente.

A agenda resolve os dois ao mesmo tempo: cada evento tem timestamp de criação (prova de quando foi avisado) e registro de visualização (prova de quando o outro viu).

---

## Usuários

- O sistema é fechado: cada calendário é compartilhado entre **exatamente dois responsáveis**.
- Cada responsável tem sua própria conta (email + senha).
- Não há usuários públicos, administradores externos ou perfis de terceiros no MVP.

---

## Entidades e campos

### User
| Campo | Tipo | Descrição |
|---|---|---|
| id | inteiro | identificador único |
| name | string | nome do responsável |
| email | string | login único |
| password_hash | string | senha nunca salva em texto puro |
| created_at | timestamp | quando criou a conta |

### FamilyGroup
| Campo | Tipo | Descrição |
|---|---|---|
| id | inteiro | identificador do grupo familiar |
| created_at | timestamp | quando o vínculo foi criado |

### FamilyMember
| Campo | Tipo | Descrição |
|---|---|---|
| id | inteiro | — |
| family_group_id | FK → FamilyGroup | a qual grupo pertence |
| user_id | FK → User | qual usuário |
| role | string | ex: "responsavel_1", "responsavel_2" |

### Event
| Campo | Tipo | Descrição |
|---|---|---|
| id | inteiro | — |
| family_group_id | FK → FamilyGroup | a qual grupo pertence o evento |
| created_by | FK → User | quem criou o aviso |
| title | string | ex: "Consulta do João - pediatra" |
| description | string (opcional) | detalhes extras |
| event_date | datetime | data/hora do compromisso em si |
| created_at | timestamp | **imutável** — prova de quando foi postado |
| updated_at | timestamp | registra se o evento foi editado depois |

### EventView
| Campo | Tipo | Descrição |
|---|---|---|
| id | inteiro | — |
| event_id | FK → Event | qual evento foi visto |
| user_id | FK → User | quem visualizou |
| viewed_at | timestamp | quando exatamente abriu o evento |

---

## Regras de negócio

### Eventos
- Todo evento deve ter: título, data do compromisso, e o usuário que criou.
- `created_at` é gerado automaticamente pelo sistema no momento da criação — o usuário não pode definir nem editar esse campo.
- `event_date` é a data do compromisso (futuro). `created_at` é a prova de antecedência (passado).
- Um evento pode ser editado, mas `updated_at` deve ser atualizado — sinalizando que houve alteração após o aviso original.
- Eventos só podem ser vistos por membros do mesmo `FamilyGroup`.
- **Campos protegidos (imutáveis após a criação):** `id`, `created_at` e `created_by`. Uma vez definidos na criação do evento, esses três campos nunca podem ser alterados — nem pelo usuário diretamente, nem por engano através de uma atualização parcial.
  - **Nota de implementação:** a função de atualização (`updateEvent`) precisa garantir essa proteção explicitamente no código — não basta confiar que o objeto `changes` recebido nunca vai conter esses campos. Isso importa principalmente na Etapa 2 (interface com formulário de edição), onde é comum reaproveitar o objeto inteiro do evento para popular o formulário — o que pode incluir `id`/`created_at`/`created_by` sem intenção e sobrescrevê-los na atualização.

### Visualização
- Quando um usuário abre um evento pela primeira vez, o sistema registra automaticamente uma linha em `EventView` com o timestamp exato.
- Se o usuário já visualizou antes, não cria duplicata — apenas a primeira visualização é registrada.
- Se não existe linha em `EventView` para um par (event_id + user_id), o evento ainda não foi visto por aquela pessoa.
- O criador do evento não gera registro em `EventView` para o próprio evento (ele já sabe que criou).

### Autenticação
- Acesso exige login (email + senha).
- Um usuário só acessa os eventos do seu próprio `FamilyGroup`.
- Não é possível ver eventos de outros grupos.

---

## O que NÃO faz parte do MVP

Reservado para versões futuras:

- Divisão de despesas
- Fluxo de aprovação/negociação de troca de datas
- Múltiplos perfis (avós, escola, babá)
- Notificações push ou email
- Histórico de edições (audit log completo)
- App mobile nativo

---

## Evolução do projeto no plano de estudos

| Etapa | Dias | O que constrói |
|---|---|---|
| 1 | 17–19 | CRUD de eventos em JS puro + localStorage |
| 2 | 30 | Interface com DOM — calendário visual |
| 3 | 37–39 | Integração com BrasilAPI (feriados) |
| 4 | 50 | Refatoração com classes (Evento, Agenda, Pessoa) |
| 5 | 57–58 | Módulos ES6 + sistema de perfis |
| 6 | 69 | Migração para TypeScript |
| Final | 79–80 | React + TypeScript + deploy no Vercel |

---

*Criado em junho/2026. Atualizar conforme decisões de produto evoluírem.*
