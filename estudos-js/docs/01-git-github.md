# 01 — Git & GitHub
### Por que isso importa para a LEVTY/SYDLE
Todo projeto da empresa é versionado. Na entrevista técnica, ter um repositório
no GitHub **já é diferencial**. Git é a primeira hard skill que eles observam.

---

## O que é Git (em uma frase)
> Git é um sistema que salva o histórico de todas as mudanças do seu código,
> permitindo voltar no tempo, trabalhar em equipe sem conflito e mostrar
> sua evolução como desenvolvedor.

---

## Conceitos essenciais (saiba explicar cada um)

| Conceito | O que é na prática |
|---|---|
| `repositório` | A pasta do projeto sob controle do Git |
| `commit` | Um "salvar" com mensagem descritiva |
| `branch` | Uma linha paralela de desenvolvimento |
| `merge` | Juntar duas branches |
| `push` | Enviar commits para o GitHub |
| `pull` | Baixar atualizações do GitHub |
| `clone` | Copiar um repositório para sua máquina |

---

## Fluxo básico — o que você vai fazer todo dia

```bash
# 1. Iniciar um projeto novo
git init
git remote add origin https://github.com/seu-usuario/seu-repo.git

# 2. Ver o status (sempre faça isso antes de commitar)
git status

# 3. Adicionar arquivos para o próximo commit
git add .              # adiciona tudo
git add arquivo.js     # ou só um arquivo

# 4. Criar o commit
git commit -m "feat: adiciona formulário de login"

# 5. Enviar para o GitHub
git push origin main
```

---

## Padrão de mensagem de commit (use isso — vai impressionar)

A LEVTY/SYDLE trabalha com times que usam **Conventional Commits**.
Formato: `tipo: descrição curta no presente`

```
chore: Configuração, arquivos de infra (.gitignore, package.json)
feat: adicionou algo novo (uma rota, uma função)
fix: corrige validação de e-mail no formulário - corrigi um bug
docs: atualiza README com instruções de instalação 
style: formata indentação do arquivo app.js
refactor: extrai lógica de autenticação para módulo separado - Reorganizou código sem mudar o comportamento
```

> Dica: na entrevista, se você mencionar que usa esse padrão,
> você demonstra maturidade técnica mesmo sendo trainee.

---

## Criando seu primeiro repositório (passo a passo)

```bash
# No terminal, dentro da pasta do seu projeto:
git init
git add .
git commit -m "feat: estrutura inicial do projeto"

# No GitHub: crie um repositório novo (sem README)
# Depois copie o link e rode:
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git branch -M main
git push -u origin main
```

---

## README bem escrito (fundamental para a entrevista técnica)

Seu repositório precisa de um README.md que responda:
1. **O que é esse projeto?** (1 frase)
2. **Quais tecnologias usa?**
3. **Como rodar localmente?**
4. **O que você aprendeu construindo isso?**

---

## Fluxo com branches (use isso no projeto prático)

```bash
# Criar uma branch nova para uma feature
git checkout -b feat/criar-tarefa

# Trabalhar, fazer commits nessa branch
git add .
git commit -m "feat: implementa criação de tarefas"

# Voltar para main e fazer merge
git checkout main
git merge feat/criar-tarefa

# Enviar tudo
git push origin main
```

---

## Checklist Git antes da entrevista

- [ ] Tenho conta no GitHub com foto e nome real
- [ ] Tenho pelo menos 1 repositório público com projeto próprio
- [ ] Meus commits têm mensagens descritivas (não "ajustes" ou "update")
- [ ] Meu repositório tem um README.md explicando o projeto
- [ ] Sei executar: `git init`, `add`, `commit`, `push`, `pull`, `branch`, `merge`
- [ ] Consigo explicar a diferença entre `git add` e `git commit`
