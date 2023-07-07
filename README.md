<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

 
## Description

```bash
# example to get max delta balanced address through 100 last blocks.
# Number of block is optional
$ http://localhost:4000/transactions/max/delta/100
```

## Installation

```bash
$ npm install
```

## .env

```bash
# you can change however you want
DB_CONNECTION=postgres
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres
DB_DB=master
DB_PORT=5432
APP_PORT=4000
DB_ENTITIES=dist/**/*.entity.js
DB_MIGRATIONS=dist/**/migrations/*.js
# you can enter yours API_KEY
API_KEY=FV64BT7T5Q8G222176MG463ZQF3I2P6STX
BASE_URL='https://api.etherscan.io'
```

## Running DB

```bash
# development
$ docker-compose up -d
```


## Running migrations

```bash
# run migrations
$ npm run migration:run

# revert migrations
$ npm run migration:revert
```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run build
$ npm run start:prod
```

## Notice

Transactions pull process takes time. If you interrupt app, cronjob will not start until you update "lock" option in "options" table in DB.