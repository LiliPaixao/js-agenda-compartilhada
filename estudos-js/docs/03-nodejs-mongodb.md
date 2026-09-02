# 03 — Node.js & MongoDB
### Por que isso importa para a LEVTY/SYDLE
O backend da SYDLE ONE usa **Java e JavaScript** com **MongoDB** como banco
de dados principal e **Elasticsearch** para buscas. Node.js é o ambiente
natural para desenvolver e testar código JS no servidor.

---

## Node.js em uma frase
> Node.js é o ambiente que permite rodar JavaScript fora do navegador —
> no servidor, no terminal, em qualquer lugar.

---

## Criando um servidor HTTP do zero

```javascript
// arquivo: servidor.js
const http = require("http");

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ mensagem: "API funcionando!" }));
});

servidor.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
```

```bash
# Para rodar:
node servidor.js
```

---

## Express.js — framework mais usado (instale e aprenda)

```bash
# Criar projeto e instalar Express
npm init -y
npm install express
```

```javascript
// arquivo: app.js
const express = require("express");
const app = express();

// Middleware para aceitar JSON no corpo das requisições
app.use(express.json());

// Dados em memória (simula banco)
let tarefas = [
  { id: 1, titulo: "Estudar JavaScript", concluida: false },
  { id: 2, titulo: "Fazer projeto LEVTY", concluida: false }
];

// GET — listar todas as tarefas
app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

// GET — buscar uma tarefa por id
app.get("/tarefas/:id", (req, res) => {
  const id = Number(req.params.id);
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  res.json(tarefa);
});

// POST — criar nova tarefa
app.post("/tarefas", (req, res) => {
  const { titulo } = req.body;

  if (!titulo) {
    return res.status(400).json({ erro: "Título é obrigatório" });
  }

  const nova = {
    id: tarefas.length + 1,
    titulo,
    concluida: false
  };

  tarefas.push(nova);
  res.status(201).json(nova);
});

// PATCH — marcar como concluída
app.patch("/tarefas/:id/concluir", (req, res) => {
  const id = Number(req.params.id);
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  tarefa.concluida = true;
  res.json(tarefa);
});

// DELETE — remover tarefa
app.delete("/tarefas/:id", (req, res) => {
  const id = Number(req.params.id);
  tarefas = tarefas.filter(t => t.id !== id);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});
```

---

## Os 4 verbos HTTP (saiba de cor)

| Verbo | Uso | Exemplo |
|---|---|---|
| `GET` | Buscar dados | `GET /tarefas` |
| `POST` | Criar registro | `POST /tarefas` |
| `PUT/PATCH` | Atualizar | `PATCH /tarefas/1/concluir` |
| `DELETE` | Remover | `DELETE /tarefas/1` |

---

## MongoDB — o banco da SYDLE

### Por que MongoDB e não SQL?
O SYDLE ONE usa MongoDB porque armazena dados flexíveis (documentos JSON),
que se encaixam bem com a variedade de processos BPM que a plataforma gerencia.

### Conceitos SQL vs MongoDB

| SQL | MongoDB | Explicação |
|---|---|---|
| Banco de dados | Database | O container maior |
| Tabela | Collection | Onde ficam os registros |
| Linha | Document | Um registro (é um JSON) |
| Coluna | Field | Um campo do documento |

### Exemplo de documento MongoDB

```json
{
  "_id": "64a1b2c3d4e5f6a7b8c9d0e1",
  "titulo": "Estudar JavaScript",
  "concluida": false,
  "prioridade": "alta",
  "tags": ["estudo", "tecnologia"],
  "criado_em": "2026-05-06T10:00:00Z"
}
```

### Operações básicas com MongoDB (via Mongoose)

```bash
npm install mongoose
```

```javascript
// Conectar ao MongoDB
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/minhas-tarefas");

// Definir um Schema (estrutura do documento)
const tarefaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  concluida: { type: Boolean, default: false },
  criadoEm: { type: Date, default: Date.now }
});

const Tarefa = mongoose.model("Tarefa", tarefaSchema);

// CREATE — criar documento
async function criarTarefa(titulo) {
  const tarefa = new Tarefa({ titulo });
  await tarefa.save();
  return tarefa;
}

// READ — buscar todos
async function listarTarefas() {
  return await Tarefa.find();
}

// READ — buscar por condição
async function tarefasPendentes() {
  return await Tarefa.find({ concluida: false });
}

// UPDATE — atualizar
async function concluirTarefa(id) {
  return await Tarefa.findByIdAndUpdate(
    id,
    { concluida: true },
    { new: true }  // retorna o documento atualizado
  );
}

// DELETE — remover
async function removerTarefa(id) {
  return await Tarefa.findByIdAndDelete(id);
}
```

---

## npm — gerenciador de pacotes (saiba usar)

```bash
npm init -y              # cria package.json
npm install express      # instala pacote
npm install -D nodemon   # instala só pra desenvolvimento

# package.json: adicione scripts úteis
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"   # reinicia ao salvar
  }
}

npm run dev   # rodar em modo desenvolvimento
```

---

## Estrutura de projeto organizada (use isso)

```
meu-projeto/
├── src/
│   ├── routes/
│   │   └── tarefas.js     # rotas separadas
│   ├── models/
│   │   └── Tarefa.js      # modelo do banco
│   └── app.js             # configuração do Express
├── .gitignore             # nunca versionar node_modules
├── package.json
└── README.md
```

---

## .gitignore (sempre crie esse arquivo)

```
node_modules/
.env
*.log
```

---

## Checklist Node.js/MongoDB antes da entrevista

- [ ] Sei o que é Node.js e para que serve
- [ ] Consigo criar uma API com Express com pelo menos 3 rotas
- [ ] Entendo os 4 verbos HTTP e quando usar cada um
- [ ] Sei o que é MongoDB e como ele difere de bancos relacionais
- [ ] Tenho o projeto rodando localmente
- [ ] O projeto está no GitHub com README
