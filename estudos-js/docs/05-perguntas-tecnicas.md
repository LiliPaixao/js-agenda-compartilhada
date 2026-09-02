# 05 — Perguntas Reais de Entrevista Técnica
### Baseado em relatos de trainees da LEVTY e SYDLE (Glassdoor + LinkedIn)

> A entrevista técnica na LEVTY é conduzida pelo líder da área.
> O foco é **raciocínio lógico, capacidade de aprendizado e contexto técnico**.
> Não esperam que você saiba tudo — esperam que você **pense bem**.

---

## Perguntas sobre Programação / Lógica

**P: O que é uma função? Por que usamos funções no código?**
> R: Uma função é um bloco de código com nome que pode ser chamado várias vezes.
> Usamos para evitar repetição (DRY — Don't Repeat Yourself), organizar o código
> em partes menores e facilitar a manutenção.

---

**P: Qual a diferença entre `==` e `===` em JavaScript?**
> R: `==` compara apenas o valor, com conversão de tipo automática.
> `===` compara valor E tipo — é mais seguro e é o que se deve usar.
> Exemplo: `"5" == 5` é `true`, mas `"5" === 5` é `false`.

---

**P: O que é uma API? Para que serve?**
> R: API (Application Programming Interface) é uma interface que permite que
> dois sistemas se comuniquem. É como um garçom num restaurante: você (cliente)
> faz um pedido, o garçom (API) leva à cozinha (sistema) e traz a resposta.
> No contexto web, usamos APIs REST com HTTP para trocar dados em JSON.

---

**P: O que é banco de dados? Qual a diferença entre SQL e NoSQL?**
> R: Banco de dados é onde armazenamos informações de forma organizada.
> SQL (relacional): dados em tabelas com colunas fixas e relações entre elas.
> Ótimo para dados estruturados e transações (ex: financeiro).
> NoSQL (como MongoDB): armazena documentos JSON flexíveis, sem esquema fixo.
> Ótimo para dados variados, escalabilidade horizontal e desenvolvimento ágil.
> A SYDLE usa MongoDB porque os processos BPM têm estrutura de dados muito variável.

---

**P: O que é Git? Por que é importante?**
> R: Git é um sistema de controle de versão distribuído. Ele registra todo
> o histórico de mudanças do código, permite trabalho em equipe sem conflito
> (via branches) e facilita voltar para versões anteriores se algo quebrar.
> É a base de qualquer trabalho colaborativo em desenvolvimento de software.

---

**P: Escreva uma função que recebe um array de números e retorna a soma de todos.**

```javascript
// Solução 1 — com reduce (mais elegante)
function somarArray(numeros) {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

// Solução 2 — com for...of (mais explícita)
function somarArray(numeros) {
  let soma = 0;
  for (const numero of numeros) {
    soma += numero;
  }
  return soma;
}

console.log(somarArray([1, 2, 3, 4, 5])); // 15
```

---

**P: O que é assíncrono? Por que precisamos de async/await?**
> R: Código assíncrono é executado sem bloquear o restante do programa.
> Precisamos disso quando uma operação demora — como buscar dados num banco
> ou chamar uma API. Sem async/await, o código esperaria parado.
> Com async/await, o Node.js continua executando outras tarefas enquanto
> aguarda a resposta, tornando a aplicação mais eficiente.

---

**P: O que é JSON?**
> R: JSON (JavaScript Object Notation) é um formato de texto para trocar dados.
> É leve, legível por humanos e usado por praticamente todas as APIs do mundo.
> Exemplo: `{ "nome": "Ana", "idade": 22, "ativo": true }`

---

## Perguntas sobre Comportamento Técnico

**P: Como você aprende uma tecnologia nova?**
> Dica de resposta: mencione prática (não só teoria), projetos pequenos para
> fixar, documentação oficial, e que você não tem medo de errar e iterar.

---

**P: Já teve algum bug difícil de resolver? O que você fez?**
> Dica: mostre processo — leu o erro, isolou o problema, testou hipóteses,
> buscou documentação. Se não tiver exemplo real, use o projeto que você fez.

---

**P: Como você se organiza quando tem várias tarefas ao mesmo tempo?**
> Dica: mencione priorização, comunicação com o time quando está bloqueado,
> e use palavras do universo ágil: backlog, sprint, daily.

---

**P: O que você sabe sobre a plataforma SYDLE ONE?**
> Veja o arquivo `04-bpm-sydle.md` — você tem a resposta preparada lá.

---

## Pergunta armadilha comum

**P: Você tem experiência com [tecnologia X que você não conhece]?**

❌ Resposta ruim: "Sim, tenho" (mentira que você vai precisar sustentar)
❌ Resposta ruim: "Não, nunca ouvi falar" (mata a conversa)

✅ Resposta boa:
> "Ainda não trabalhei diretamente com X, mas já estudei o conceito por cima.
> Sei que é usado para [contexto]. Tenho facilidade em aprender tecnologias
> novas — quando fiz meu projeto, aprendi [algo relevante] do zero em [prazo]."

---

## Dicas para o dia da entrevista técnica

1. **Pense em voz alta** — eles querem ver seu raciocínio, não só a resposta
2. **Pergunte se tiver dúvida** — "Posso confirmar: você quer que a função retorne X?"
3. **Não finja saber** — "Não sei de cor, mas sei o raciocínio por trás"
4. **Conecte ao projeto** — sempre que puder, mostre o que você construiu
5. **Fale da SYDLE** — demonstrar que pesquisou a empresa gera ponto positivo
