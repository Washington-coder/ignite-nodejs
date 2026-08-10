# 04-clean-ddd

Projeto de estudo (Rocketseat) que aplica **Domain-Driven Design (DDD)** e **Clean Architecture** em um domínio de perguntas e respostas (estilo Stack Overflow).

## 📋 Descrição

Este projeto implementa a **camada de domínio** de um sistema de perguntas e respostas. Ele organiza o código em entidades, repositórios e casos de uso, seguindo os princípios de DDD e Clean Architecture:

- **Entidades** (`src/domain/entities`): modelos de negócio com identidade própria (`Answer`, `Question`, `Student`, `Instructor`).
- **Repositórios** (`src/domain/repositories`): contratos (interfaces) de persistência, desacoplados de qualquer banco de dados.
- **Casos de uso** (`src/domain/use-cases`): orquestram as regras de aplicação, como o `AnswerQuestionUseCase`.

O projeto ainda não possui camada de infraestrutura (banco de dados, API HTTP) — é a fundação de domínio pronta para crescer.

## 🚀 Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm (já incluso no Node.js)

### Passos

1. Clone o repositório e acesse a pasta do projeto:

   ```bash
   git clone <url-do-repositorio>
   cd 04-clean-ddd
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute os testes:

   ```bash
   npm test
   ```

   Para rodar os testes em modo de observação (watch):

   ```bash
   npm run test:watch
   ```

## 🛠️ Tecnologias utilizadas

| Tecnologia                   | Finalidade                         |
| ---------------------------- | ---------------------------------- |
| **TypeScript** | Linguagem com tipagem estática |
| **Node.js** | Ambiente de execução |
| **Vitest** | Framework de testes unitários |
| **ESLint** | Linter de código |
| **Prettier** | Formatador de código |
| **DDD / Clean Architecture** | Padrões de arquitetura de software |

## 📁 Estrutura de pastas

```
src/
└── domain/
    ├── entities/          # Entidades de domínio
    ├── repositories/      # Contratos de persistência
    └── use-cases/         # Casos de uso
```

## 📝 Scripts disponíveis

| Comando              | Descrição                               |
| -------------------- | --------------------------------------- |
| `npm test`           | Executa os testes unitários             |
| `npm run test:watch` | Executa os testes em modo de observação |
| `npm run lint`       | Verifica erros de linting e formatação  |
| `npm run lint:fix`   | Corrige automaticamente erros de linting e formatação |
| `npm run format`     | Formata todos os arquivos com o Prettier |

## ✨ Formatação automática ao salvar

O projeto está configurado com **ESLint** e **Prettier** para corrigir automaticamente erros de formatação ao salvar arquivos no VS Code.

### Pré-requisitos

Instale as extensões no VS Code:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Como funciona

A configuração em `.vscode/settings.json` ativa:

- **`editor.formatOnSave`**: formata o arquivo com o Prettier ao salvar.
- **`source.fixAll.eslint`**: corrige automaticamente os erros de linting ao salvar.

As regras de formatação estão em `.prettierrc` (aspas simples, sem ponto-e-vírgula, indentação de 2 espaços, etc.).
