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
- **Data**: 08/09/2025

## Tecnologias Utilizadas

- Vue 3.5.18
- JavaScript
- Yarn 4.9.4
- Docker 28.3.3
- APIs fornecidas

## Pré-requisitos

### Para Linux Ubuntu:
- Docker
- Docker Compose

### Para Windows:
- Docker Desktop + WSL2

## Configuração no Linux Ubuntu

### Instalação do Docker
Caso o método abaixo não de certo, consulte a [documentação oficial](https://docs.docker.com/engine/install/ubuntu/) para uma instalação mais detalhada.

**Instalação rápida:**
```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Adicionar usuário ao grupo docker (para não usar sudo)
sudo usermod -aG docker $USER

# Reiniciar sessão ou executar:
newgrp docker
```

### Instalação do Docker Compose
```bash
# Verificar se já está instalado
docker compose version

# Se não estiver, instalar:
sudo apt install docker-compose-plugin
```

## Configuração no Windows

### Opção 1: Docker Desktop (Mais simples)
1. **Instale o Docker Desktop**
   - Baixe do [site oficial](https://www.docker.com/products/docker-desktop)
   - Execute o instalador
   - Reinicie o Windows

2. **Configure o WSL2**
   ```powershell
   # No PowerShell como administrador
   wsl --install
   wsl --set-default-version 2
   wsl --install -d ubuntu
   ```

3. **Configure Docker Desktop para WSL2 (se necessário)**
   - Abra Docker Desktop
   - Vá em **Settings** → **General**
   - Marque "Use the WSL 2 based engine"
   - Em **Resources** → **WSL Integration**
   - Habilite integração com Ubuntu

## Instalação e Execução

### Método 1: Docker (recomendado)

1. **Clone o repositório**

   **Windows (PowerShell/CMD):**
   ```cmd
   git clone https://github.com/Moises-Drum/projeto-pessoas-desaparecidas-mt.git
   cd projeto-pessoas-desaparecidas-mt
   ```

   **Windows (WSL2/Ubuntu):**
   ```bash
   git clone https://github.com/Moises-Drum/projeto-pessoas-desaparecidas-mt.git
   cd projeto-pessoas-desaparecidas-mt
   ```

   **Linux:**
   ```bash
   # HTTPS (Recomendado para maioria dos casos)
   git clone https://github.com/Moises-Drum/projeto-pessoas-desaparecidas-mt.git
   
   # SSH (Recomendado para linux)
   git clone git@github.com:Moises-Drum/projeto-pessoas-desaparecidas-mt.git
   
   cd projeto-pessoas-desaparecidas-mt
   ```
   
2. **Build e execute com Docker Compose**
   
   **Windows (PowerShell/CMD):**
   ```cmd
   docker compose up --build
   ```
   
   **Windows (WSL2) e Linux:**
   ```bash
   docker compose up --build
   ```
   
### Método 2: Ambiente Local

**Pré-requisitos para execução local:**
- Node.js (versão 20 ou superior)
- Yarn

1. **Clone o repositório** (mesmo processo do Método 1)
   
2. **Atualize o Yarn (opcional)**
   ```bash
   corepack enable && corepack install -g yarn@4.9.4
   ```

3. **Instale as dependências**
   ```bash
   yarn install
   ```

4. **Execute o projeto em modo de desenvolvimento**
   ```bash
   yarn dev
   ```

## Comandos Docker

### Windows (PowerShell/CMD):
```cmd
docker compose up --build    # Build e executa o projeto
docker compose down          # Para e remove os containers
docker compose logs          # Visualiza os logs
docker compose restart       # Reinicia os containers
```

### Windows (WSL2) e Linux:
```bash
docker compose up --build    # Build e executa o projeto
docker compose down          # Para e remove os containers
docker compose logs          # Visualiza os logs
docker compose restart       # Reinicia os containers
```

## Scripts Disponíveis (para desenvolvimento local)

- `yarn dev` - Executa o projeto em modo de desenvolvimento
- `yarn build` - Gera build de produção
- `yarn preview` - Visualiza o build de produção
- `yarn lint` - Executa o linter
- `yarn test` - Executa os testes

### Testes (Verificação Manual)
1. **Tela Inicial:**
    - Verifique se os cards são exibidos corretamente
    - Teste a paginação
    - Teste o campo de busca
    - Teste os filtros
    - Teste a responsividade

2. **Detalhamento:**
    - Clique no botão **Ver Detalhes** presente em um card e verifique se irá encaminhar para outra pagina
    - Confirme se o status **"Desaparecida"/"Localizada"** está aparecendo corretamente
    - Verifique se as **"informações pessoais" e "informações do desaparecimento"**, estão aparecendo corretamente

3. **Envio de Informações:**
    - Verifique se o botão **"FORNECER INFORMAÇÕES"** está abrindo o formulário
    - Verifique se todos os dados estão sendo inseridos corretamente
    - Teste o upload e exclusão das fotos
    - Verifique a obrigatoriedade dos dados ao clicar em **"Enviar informações"** (deve reclamar se deixar passar 1 campo sem preencher)
    - Ao enviar, deve ser apresentado uma modal de sucesso e os dados devem aparecer em **"Status e Atualizações"**

4. **Log**
    - O campo de log chama-se **"Status e Atualizações"**. Verifique se a ultima informação adicionada está aparecendo
    - Clique na seção e verifique se aparecerá um historico mostrando todas as ocorrências informadas
    - Teste o download dos arquivos

## Configuração da API

O projeto consome APIs fornecidas pela empresa. Caso seja necessário alterar a URL base, ela estará localizada em 
`/src/services/api.js`:

```javascript
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

## Solução de Problemas

### Problemas com dependências
Rebuild o projeto caso esteja tendo problemas com dependências:

```bash
docker compose down
docker compose up --build
```

### Problemas no Windows
- **Docker Desktop não inicia**: Verifique se o WSL2 está instalado e funcionando
- **Permissões no WSL2**: Execute `sudo usermod -aG docker $USER` e reinicie o terminal
- **Performance lenta**: Use WSL2 em vez do Docker Desktop nativo

### Problemas no Linux
- **Permissão negada**: Execute `sudo usermod -aG docker $USER` e reinicie a sessão
- **Docker não inicia**: Execute `sudo systemctl start docker`
- **Docker Compose não encontrado**: Reinstale usando os comandos da seção de instalação
