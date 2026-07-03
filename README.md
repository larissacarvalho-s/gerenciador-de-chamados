# 💻 Sistema Web de Gerenciamento de Chamados de Suporte Técnico (Help Desk)

## 📋 Sobre o projeto

Este projeto consiste no desenvolvimento de um **Sistema Web de Gerenciamento de Chamados de Suporte Técnico (Help Desk)** baseado na metodologia **Kanban**.

A aplicação foi desenvolvida como trabalho da disciplina **Imersão Profissional: Implementação de uma Aplicação**, do curso de **Análise e Desenvolvimento de Sistemas**, tendo como objetivo aplicar na prática os conhecimentos adquiridos durante a graduação utilizando **HTML5**, **CSS3** e **JavaScript**.

O sistema permite o registro, organização e acompanhamento visual de chamados de suporte técnico relacionados a problemas de hardware, software, redes e acessos aos sistemas, simulando o fluxo de trabalho utilizado em setores de Help Desk.

---

## 🎯 Objetivo

Desenvolver uma aplicação web simples, intuitiva e funcional para auxiliar no gerenciamento de chamados de suporte técnico, permitindo acompanhar o ciclo de vida das solicitações através de um painel Kanban.

---

## 🚀 Funcionalidades

✔ Cadastro de chamados

✔ Geração automática de protocolo

✔ Pesquisa por:

- Protocolo
- Usuário
- Problema

✔ Classificação por prioridade

- Alta
- Média
- Baixa

✔ Categorias de chamados

- Hardware
- Software
- Rede
- Acesso

✔ Atribuição de técnico responsável

✔ Movimentação dos chamados entre as colunas utilizando **Drag and Drop**

✔ Exclusão de chamados

✔ Persistência de dados utilizando **LocalStorage**

✔ Interface responsiva

✔ Tema escuro (Dark Mode)

---

## 🖥️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- LocalStorage
- DOM
- Drag and Drop API

---

## 📂 Estrutura do projeto

```
📦 helpdesk-kanban
│
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── imagens
```

---

## ⚙️ Como executar o projeto

1. Clone este repositório

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

2. Abra a pasta do projeto.

3. Execute o arquivo:

```
index.html
```

Não é necessário instalar dependências ou utilizar servidor.

O sistema funciona diretamente no navegador.

---

## 📌 Como utilizar

### 1️⃣ Cadastrar um chamado

Preencha:

- Usuário
- Problema
- Categoria
- Prioridade
- Técnico responsável

Clique em **Cadastrar**.

---

### 2️⃣ Pesquisar chamados

Utilize a barra de pesquisa para localizar chamados por:

- usuário;
- protocolo;
- descrição do problema.

---

### 3️⃣ Atualizar status

Arraste o cartão para outra coluna.

Fluxo:

```
Aberto
      ↓
Em Atendimento
      ↓
Finalizado
```

---

### 4️⃣ Excluir chamado

Clique no botão **Excluir** presente no cartão.

O chamado será removido do painel e do armazenamento local.

---

## 💾 Persistência dos dados

Os chamados são armazenados utilizando a **Web Storage API (LocalStorage)**.

Assim, mesmo fechando o navegador, as informações permanecem salvas até que sejam removidas pelo usuário.

---

## 📸 Imagens da aplicação

### Tela Inicial

> *(Adicionar um print da tela inicial aqui)*

---

### Cadastro de Chamados

> *(Adicionar um print do formulário aqui)*

---

### Painel Kanban

> *(Adicionar um print das três colunas aqui)*

---

## 📚 Conceitos aplicados

Durante o desenvolvimento foram utilizados conceitos como:

- Desenvolvimento Web
- HTML5
- CSS3
- JavaScript
- Manipulação do DOM
- Eventos
- Objetos
- Arrays
- LocalStorage
- Drag and Drop
- Kanban
- Help Desk
- Engenharia de Software

---

## 📖 Fundamentação

O projeto foi desenvolvido com base em conceitos de:

- Engenharia de Software
- Sistemas de Informação
- Help Desk
- ITIL
- Kanban
- Desenvolvimento Web

---

## 🎓 Finalidade acadêmica

Este projeto foi desenvolvido exclusivamente para fins acadêmicos como requisito avaliativo da disciplina:

**Imersão Profissional: Implementação de uma Aplicação**

Curso:

**Análise e Desenvolvimento de Sistemas**

---

## 🔮 Melhorias futuras

Como evolução do projeto poderão ser implementadas as seguintes funcionalidades:

- Login de usuários
- Banco de dados (MySQL ou PostgreSQL)
- API REST
- Autenticação JWT
- Cadastro de clientes
- Histórico de movimentações
- Dashboard com gráficos
- Relatórios em PDF
- Notificações por e-mail
- Upload de anexos
- Controle de SLA
- Painel administrativo

---

## 👩‍💻 Autora

**Larissa Carvalho**

Projeto desenvolvido como atividade acadêmica do curso de **Análise e Desenvolvimento de Sistemas**.

---

## 📄 Licença

Este projeto possui finalidade exclusivamente acadêmica e educacional.
