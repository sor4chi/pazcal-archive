# Pazcal WebSite + API
This repository is based on GitFlow.
## Setup
```sh
cp .env.example .env
// write some settings to .env
docker-compose up -d --build
```
## Lint
Before you commit, run this command.
```sh
docker-compose run --rm front yarn lint
```