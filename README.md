# Bootcamp GoStack-6 - Desafio 01

## Sobre o Desafio

Configure uma aplicação utilizando ExpressJS, Nunjucks, EditorConfig e ESLint.
Até agora criamos a parte do usuário poder agendar um serviço com o prestador, e também vetamos que serviços sejam marcados no mesmo horário, ou em horários que já passaram.

A partir de agora você deve implementar o seguinte:

Crie uma seção para o prestador de serviços acompanhar os agendamentos do dia programados com ele. Essa seção deve incluir as informações do usuário que agendou e também o horário do agendamento.

## Rodando o app

Primeiro instale e configure os bancos

### Redis

docker run --name gonode-redis -p 6379:6379 -d redis
Isso irá criar uma instancia do Redis, rodando na porta 6379
Caso reinicie o PC utilize o comando abaixo para startar o serviço
docker start gonode-redis

### Postgres

docker run --name gonode-db -p 5432:5432 -d -t kartoza/postgis
Isso irá criar uma instancia do Postgres, rodando na porta 5432
Caso reinicie o PC utilize o comando abaixo para startar o serviço
docker start gonode-db

Após criado a instancia utilize o usuario e senha "docker" e conecte por um gerenciador de banco de dados. Crie uma database chamado "gobarber".
Caso utilize configurações diferentes dessas, modifique o arquivo config/database.json com suas configurações.

### Projeto

Na pasta da aplicação rode o comando "yarn" para instalar as dependecias.
Em seguida "npx sequelize db:migrate" para criar as tabelas no banco de dados.
Rode o comando "yarn start" para subir o serviço. Por default o serviço irá rodar na porta 3000

Acesse localhost:3000 e divirta-se!
