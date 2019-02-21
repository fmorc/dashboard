FROM node:8.11.2-alpine as node
LABEL author="Fernando Morales"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .