<p align="center">
    <img alt="Proffy" src="../.github/logo.svg" width="250px" />
</p>

# Backend

Esta parte do projeto é responsável pela criação do Banco de Dados e a comunicação deste com o Frontend e o Backend. A API é criada usando o **Express**.

## Para rodar a aplicação:

```shell
  $ yarn install
  $ yarn start
```

---

## KNEX - Banco de dados

Migration é o nome dos arquivos que criam os bancos de dados e tabelas.
Configuração básica:

```json
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },
```

## Para criar o Banco de Dados

```shell
yarn knex:migrate
```

---

## Sobre o projeto

O **Proffy** é um projeto que visa ajudar professores e alunos a se conhecerem e marcarem aulas, de diversas matérias.
