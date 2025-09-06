# PROJETO PRÁTICO – IMPLEMENTAÇÃO FRONT-END

Este projeto está sendo desenvolvido para a **Chamada Avaliação Profissional – Requisitos Desenvolvedor Júnior**, 
disponibilizada pelo setor de Tecnologia da **Desenvolve MT**.

O site desenvolvido contém informações meramente ilustrativas referentes a pessoas desaparecidas no estado de 
Mato Grosso. Nele é possível consultar a situação da pessoa (desaparecida/localizada) e registrar informações 
sobre o desaparecimento. Ao longo do documento, haverá informações sobre o deseenvolvedor e a execução do projeto.

## Dados de Inscrição

- **Nome**: Moisés de Souza Drumand
- **Email**: moises.drumand18@gmail.com
- **Empresa**: Desenvolve MT
- **Posição**: Desenvolvedor Junior
- **Prazo**: 08/09/2025

## Tecnologias Utilizadas

- Vue 3.5.18
- JavaScript
- Yarn 4.9.4
- Docker 28.3.3
- APIs fornecidas

## Pré-requisitos

- Docker
- Docker compose

## Pré-requisito para execução local
- Node.js (versão 20 ou superior)
- Yarn

## Instalação e Execução

### Método 1: Docker (recomendado)

1. **Clone o repositório**
   ```bash
   git clone git@github.com:Moises-Drum/projeto-pessoas-desaparecidas-mt.git
   cd projeto-pessoas-desaparecidas-mt
   ```
   
2. **Build e execute com Docker compose**
   ```bash
   docker-compose up --build
   ```
   
### Método 2: Ambiente Local

1. **Clone o repositório**
   ```bash
   git clone git@github.com:Moises-Drum/projeto-pessoas-desaparecidas-mt.git
   cd projeto-pessoas-desaparecidas-mt
   ```
   
2. **Atualize o Yarn (opcional)**
   ```bash
   corepack enable && corepack install -g yarn@4.9.4
   ```

3. **Instale as dependências**
   ```bash
   yarn install
   ```

5. **Execute o projeto em modo de desenvolvimento**
   ```bash
   yarn dev
   ```

## Comandos Docker

- `docker compose up --build` - Build e executa o projeto
- `docker compose down` - Para e remove os containers
- `docker compose logs` - Visualiza os logs
- `docker compose restart` - Reinicia os containers

## Scripts Disponíveis (para desenvolvimento local)

- `yarn dev` - Executa o projeto em modo de desenvolvimento
- `yarn build` - Gera build de produção
- `yarn preview` - Visualiza o build de produção
- `yarn lint` - Executa o linter
- `yarn test` - Executa os testes

## Configuração da API

O projeto consome APIs fornecidas pela empresa. Caso seja necessário alterar a URL base, ela estará localizada em 
`/src/services/api.js`:

```
const api = Axios.create({
    baseURL: 'https://abitus-api.geia.vip',
})
```

## Estrutura do Projeto

```
pessoas-desaparecidas-mt/
├── public/                 # Arquivos públicos estáticos
├── src/                    # Código fonte da aplicação
│   ├── assets/             # Recursos estáticos (imagens, css, etc)
│   ├── components/         # Componentes Vue reutilizáveis
│   ├── pinia/              # Stores de gerenciamento de estado
│   ├── router/             # Configuração de rotas Vue Router
│   ├── services/           # Serviços de integração com APIs
│   ├── stores/             # Stores adicionais
│   ├── utils/              # Funções utilitárias
│   ├── App.vue             # Componente raiz da aplicação
│   └── main.js             # Ponto de entrada da aplicação
├── .dockerignore           # Arquivos ignorados no build Docker
├── .editorconfig           # Configurações do editor
├── .gitattributes          # Configurações do Git
├── .gitignore              # Arquivos ignorados pelo Git
├── .prettierrc.json        # Configurações do Prettier
├── .yarnrc.yml             # Configurações do Yarn
├── docker-compose.yml      # Orquestração Docker
├── Dockerfile              # Configuração de container Docker
├── eslint.config.js        # Configurações do ESLint
├── index.html              # Template HTML principal
├── jsconfig.json           # Configurações do JavaScript
├── package.json            # Dependências e scripts do projeto
├── README.md               # Documentação do projeto
├── vite.config.js          # Configurações do Vite
└── yarn.lock               # Lock file das dependências
```

## Arquitetura de Componentes
```
src/
├── components/
│   ├── atoms/          # Componentes básicos e indivisíveis (botões, inputs, labels)
│   ├── modals/         # Componentes de modal e diálogos
│   ├── molecules/      # Combinações de átomos (formulários, cards)
│   ├── organisms/      # Seções complexas (headers, sidebars, listas)
│   ├── pages/          # Componentes de página completa
│   └── templates/      # Layouts e estruturas de página
```

Como mostrado, este projeto utiliza dos conceitos de Atomic Design para organização de seus componentes. Para mais
informações sobre a arquitetura, [visite o site](https://medium.com/pretux/atomic-design-o-que-%C3%A9-como-surgiu-e-sua-import%C3%A2ncia-para-a-cria%C3%A7%C3%A3o-do-design-system-e3ac7b5aca2c).

### Problemas com dependências

Rebuild o projeto caso esteja tendo problemas com dependências.

``` bash
  docker compose down
  docker compose up --build
```
