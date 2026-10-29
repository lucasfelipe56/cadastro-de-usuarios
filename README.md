# 🚀 Cadastro de Usuários - Full Stack

Um projeto completo de cadastro de usuários desenvolvido para colocar em prática conceitos de desenvolvimento Full Stack, separando de forma limpa a interface do usuário (Front-end) e as regras de negócio/banco de dados (Back-end).

## 💻 Sobre o Projeto

Este projeto permite o gerenciamento de usuários de forma dinâmica. O objetivo principal foi criar uma arquitetura integrada onde o Front-end consome uma API própria no Back-end, simulando um ambiente real de mercado. 

Com isso, é possível criar novos usuários, listar e deletar registros, permitindo um aprendizado prático sobre o funcionamento das rotas e operações de CRUD.

## 🛠️ Tecnologias Utilizadas

### Front-end
* **React.js** (Biblioteca para construção da interface)
* **Vite** (Ferramenta de build rápida para o Front-end)
* **Axios** (Para requisições HTTP à API)

### Back-end
* **Node.js** (Ambiente de execução Javascript no servidor)
* **Express** (Framework para criação das rotas da API)
* **MongoDB** (Banco de dados para persistência das informações)

## 🚀 Como Executar o Projeto

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina o **Node.js** e um gerenciador de pacotes como o **Yarn** ou **NPM**.

### 1. Clonando o repositório
```bash
git clone https://github.com
cd nome-do-seu-repositorio
```

### 2. Instalando as dependências
Abra o terminal na pasta raiz do projeto e instale as ferramentas necessárias para rodar o ecossistema unificado:
```bash
npm install
```

### 3. Configurando as Variáveis de Ambiente (.env)
Para que o back-end se conecte corretamente ao banco de dados, você precisa configurar suas próprias credenciais locais:

1. Acesse a pasta `backend/`.
2. Crie um arquivo novo chamado exatamente **`.env`** (use o arquivo `.env.example` existente como guia).
3. Adicione a sua linha de conexão do MongoDB na variável `DATABASE_URL` seguindo o modelo:

```text
DATABASE_URL="mongodb+srv://SEU_USUARIO:SUA_SENHA@seu-cluster.mongodb.net/NomeDoBanco?retryWrites=true&w=majority"
```

### 4. Rodando a aplicação
Com o banco configurado, volte para a **pasta raiz** do projeto no terminal e inicie o Front-end e o Back-end simultaneamente com apenas um comando:

```bash
npm run dev
```
O servidor do Node e o painel do Vite iniciarão juntos no seu terminal automaticamente!
