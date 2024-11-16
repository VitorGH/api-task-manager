# Task Manager
Desenvolvimento de uma API RESTful para gerenciamento de tarefas.


## Sobre
Aplicativo de gerenciamento de tarefas, com autenticação de usuário.
Conhecido por task-manager, este aplicativo tornará fácil anotar suas tarefas para não esqueçê-las.


### Status do projeto
[x] Projeto
[x] Escolha de linguagens
[x] Predefinições
[x] Desenvolvimento
[x] **Finalizado**


# Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com), [SQlite](https://www.sqlite.org) .
Também é recomendado um editor de código como VSCode, onde pode facilmente visualizar o código. [VSCode](https://code.visualstudio.com/)


##  Passo-a-Passo 

```bash
# Clone este repositório utilizando GitBash
$ git clone <https://github.com/VitorGH/api-task-manager.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd api-task-manager

# Abra a pasta no vs code
$ code .

# No GitBash, utlize o comando para que o Docker baixe e inicialze
$ docker build -t api-task-manager .

# Após terminar o download, rode este comando
$ docker run -p 3000:3000 api-task-manager

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```


## Técnologias utilizadas

Para nosso projeto, foram utilizadas as seguintes tecnologias:
[Node.js](https://nodejs.org/en/)
 [Sequelize](https://sequelize.org)
 [Express](https://expressjs.com)
[npm](https://www.npmjs.com)
 [bcrypt](https://www.npmjs.com/package/bcrypt)
[JWT](https://jwt.io)
[Swagger](https://swagger.io)
[SQLite](https://www.sqlite.org)
[Docker](https://www.docker.com)


# Desenvolvedores e RA's
- Vitor Barroso Rodrigues | 2201425
- Bruno Gabriel Rodrigues | 2104370