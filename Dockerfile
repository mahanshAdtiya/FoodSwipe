FROM node:alpine3.18 AS build

WORKDIR /foodwipe

COPY package*.json /foodwipe

RUN npm install

COPY . /foodwipe

RUN npm run build

RUN npm install -g serve

EXPOSE 4016

CMD ["serve", "-s", "-l", "4015", "dist/"]