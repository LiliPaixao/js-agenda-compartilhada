# 02 — JavaScript Essencial
### Por que isso importa para a LEVTY/SYDLE
JavaScript é a **principal linguagem** do stack. Trainees confirmam que usam
JS no dia a dia da plataforma SYDLE ONE. A entrevista técnica vai testar
lógica — e JS é a linguagem mais natural para demonstrar isso.

---

## Fundamentos que você PRECISA dominar

### 1. Variáveis — use `const` e `let`, nunca `var`

```javascript
const nome = "Ana";        // não muda
let idade = 22;            // pode mudar
idade = 23;                // ok

// const nome = "Bia";     // ❌ erro — const não reatribui
```

---

### 2. Funções — três formas (saiba as três)

```javascript
// Forma tradicional
function somar(a, b) {
  return a + b;
}

// Função guardada em variável
const subtrair = function(a, b) {
  return a - b;
};

// Arrow function (mais moderna, usada no dia a dia)
const multiplicar = (a, b) => a * b;

console.log(somar(2, 3));       // 5
console.log(multiplicar(4, 5)); // 20
```

---

### 3. Arrays — operações essenciais

```javascript
const frutas = ["maçã", "banana", "laranja"];

// Acessar
console.log(frutas[0]); // "maçã"

// Adicionar / remover
frutas.push("uva");     // adiciona no final
frutas.pop();           // remove do final

// Os 3 métodos que mais aparecem em entrevista:

// .map() → transforma cada elemento
const maiusculas = frutas.map(f => f.toUpperCase());
// ["MAÇÃ", "BANANA", "LARANJA"]

// .filter() → filtra por condição
const nums = [1, 2, 3, 4, 5, 6];
const pares = nums.filter(n => n % 2 === 0);
// [2, 4, 6]

// .find() → retorna o primeiro que atende
const tarefas = [
  { id: 1, titulo: "Estudar JS" },
  { id: 2, titulo: "Fazer projeto" }
];
const tarefa = tarefas.find(t => t.id === 2);
// { id: 2, titulo: "Fazer projeto" }
```

---

### 4. Objetos Globais — estrutura fundamental

O objeto global possui um nome universal globalThis.

…Mas, com mais frequência, é referido por nomes específicos de ambiente “à moda antiga”, como window(navegador) e global(Node.js).

Devemos armazenar valores no objeto global somente se eles forem realmente globais para o nosso projeto. E manter a quantidade deles no mínimo.

No navegador, a menos que estejamos usando módulos , funções e variáveis ​​globais declaradas com ` varglobal` tornam-se uma propriedade do objeto global.

Para tornar nosso código à prova de futuro e mais fácil de entender, devemos acessar as propriedades do objeto global diretamente, como window.x.

---

### 5. Objetos — estrutura fundamental

```javascript
const usuario = {
  nome: "Ana",
  email: "ana@email.com",
  idade: 22,
  ativo: true
};

// Acessar propriedades
console.log(usuario.nome);         // "Ana"
console.log(usuario["email"]);     // "ana@email.com"

// Desestruturação (muito usado no dia a dia)
const { nome, email } = usuario;
console.log(nome);  // "Ana"

// Spread operator — copiar/juntar objetos
const atualizado = { ...usuario, idade: 23 };
```

---

### 5. Condicionais e loops

```javascript
// if/else
const nota = 7;
if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

// Operador ternário (forma curta)
const status = nota >= 7 ? "Aprovado" : "Reprovado";

// for...of (para arrays)
const nomes = ["Ana", "Bia", "Carlos"];
for (const nome of nomes) {
  console.log(nome);
}

// forEach
nomes.forEach((nome, indice) => {
  console.log(`${indice}: ${nome}`);
});
```

---

### 6. Promises e async/await (fundamental para backend)

```javascript
// O problema: buscar dados leva tempo (chamada de API, banco de dados)
// Solução: código assíncrono

// Com Promise
function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    if (id > 0) {
      resolve({ id, nome: "Ana" });
    } else {
      reject(new Error("ID inválido"));
    }
  });
}

// Com async/await (forma moderna e mais legível)
async function main() {
  try {
    const usuario = await buscarUsuario(1);
    console.log(usuario.nome); // "Ana"
  } catch (erro) {
    console.error("Erro:", erro.message);
  }
}

main();
```

---

### 7. Módulos — organizar código em arquivos

```javascript
// arquivo: utils.js
export function calcularIdade(anoNascimento) {
  return new Date().getFullYear() - anoNascimento;
}

export const PI = 3.14159;

// arquivo: main.js
import { calcularIdade, PI } from "./utils.js";
console.log(calcularIdade(2002)); // 23
```

---

## Exercícios práticos (faça antes da entrevista)

```javascript
// 1. Filtre apenas os números ímpares de um array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Esperado: [1, 3, 5, 7, 9]

// 2. Crie uma função que recebe um array de objetos
// com { nome, nota } e retorna apenas os aprovados (nota >= 7)
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bia", nota: 5 },
  { nome: "Carlos", nota: 7 },
  { nome: "Diego", nota: 4 }
];
// Esperado: [{ nome: "Ana", nota: 8 }, { nome: "Carlos", nota: 7 }]

// 3. Escreva uma função que inverte uma string sem usar .reverse()
// invertString("hello") → "olleh"

// 4. Dado um array de tarefas, retorne quantas estão concluídas
const tarefas = [
  { titulo: "Estudar", concluida: true },
  { titulo: "Fazer projeto", concluida: false },
  { titulo: "Commitar código", concluida: true }
];
// Esperado: 2
```

---

## Respostas dos exercícios

```javascript
// 1.
const impares = numeros.filter(n => n % 2 !== 0);

// 2.
const aprovados = alunos.filter(a => a.nota >= 7);

// 3.
function invertString(str) {
  return str.split("").reverse().join("");
  // ou sem .reverse():
  // let resultado = "";
  // for (let i = str.length - 1; i >= 0; i--) resultado += str[i];
  // return resultado;
}

// 4.
const qtdConcluidas = tarefas.filter(t => t.concluida).length;
```

---

## Checklist JS antes da entrevista

- [ ] Sei a diferença entre `const`, `let` e `var`
- [ ] Sei escrever arrow functions
- [ ] Consigo usar `.map()`, `.filter()` e `.find()` sem consultar
- [ ] Entendo o que é assíncrono e sei usar `async/await`
- [ ] Sei desestruturar objetos e arrays
- [ ] Consigo resolver os 4 exercícios acima sem ajuda
