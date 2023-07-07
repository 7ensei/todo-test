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

## Running the app

```bash
# development
$ docker-compose up -d
# run migrations
$ npm run migration:run
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