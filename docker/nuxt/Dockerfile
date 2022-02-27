FROM node:16-alpine
WORKDIR /app

COPY ./front/package.json ./
RUN yarn install
COPY ./front .