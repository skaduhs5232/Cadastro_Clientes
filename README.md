# Cadastro de Clientes

Esta aplicação é um sistema de cadastro de clientes desenvolvido em TypeScript e React. O objetivo é permitir que os usuários possam adicionar, editar, visualizar e excluir informações de clientes.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem de programação que é um superconjunto do JavaScript.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Node.js**: Ambiente de execução JavaScript server-side.
- **npm**: Gerenciador de pacotes para Node.js.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Node.js](https://nodejs.org/en/): Ambiente de execução JavaScript.
- [npm](https://www.npmjs.com/): Gerenciador de pacotes do Node.js.

Além disto, é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

## Instalação

### Passo 1: Clonar o Repositório

Clone o repositório do GitHub para a sua máquina local usando o seguinte comando:

```bash
git clone https://github.com/seu-usuario/Cadastro_Clientes.git
```

### Passo 2: Acessar a Pasta do Projeto

Navegue até a pasta do projeto:

```bash
cd Cadastro_Clientes/FrontEnd
```

### Passo 3: Instalar as Dependências

Instale as dependências do projeto utilizando o npm:

```bash
npm install
```

## Executando a Aplicação

Para iniciar a aplicação em modo de desenvolvimento, execute o seguinte comando:

```bash
npm start
```

A aplicação será iniciada e estará disponível no endereço `http://localhost:3000`.

## Estrutura do Projeto

A estrutura de pastas do projeto é organizada da seguinte forma:

```
Cadastro_Clientes/
├── FrontEnd/
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis da aplicação
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── services/      # Serviços para comunicação com APIs
│   │   ├── App.tsx        # Componente principal da aplicação
│   │   ├── index.tsx      # Ponto de entrada da aplicação
│   │   └── ...            # Outros arquivos e pastas
│   ├── public/            # Arquivos públicos (HTML, imagens, etc.)
│   ├── tsconfig.app.json  # Configurações do TypeScript
│   ├── package.json       # Dependências e scripts do npm
│   └── ...                # Outros arquivos e pastas
└── ...
```

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

- `npm start`: Inicia a aplicação em modo de desenvolvimento.
- `npm run build`: Compila a aplicação para produção na pasta `build`.
- `npm test`: Executa os testes da aplicação.
- `npm run eject`: Remove a configuração de build do Create React App.

## Contribuição

Contribuições são sempre bem-vindas! Se você tiver sugestões ou encontrar problemas, por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.
