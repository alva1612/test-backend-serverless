## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run sls:dev
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deploy

```bash
$ npm run sls:deploy
```

## Folder structure

```bash
./
  src/
    # common varied utilities
    common/
    # vertical sliced clean arch
    modules/
      <moduleName>/
        application/
        domain/
        infraestructure/
  # e2e testing folder
  test/
```

## OpenApi - Swagger

In order to access the OpenApi document, run the project locally and access:

[http://localhost:3000/dev/api#/](http://localhost:3000/dev/api#/)
