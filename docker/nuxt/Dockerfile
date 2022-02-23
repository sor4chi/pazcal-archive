FROM node:16-alpine
WORKDIR /app

COPY ./front/package.json ./
COPY ./front/yarn.lock ./
RUN yarn install
COPY ./front .