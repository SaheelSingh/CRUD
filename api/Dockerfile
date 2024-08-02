FROM node:alpine3.18

WORKDIR /api

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm" , "start" ]