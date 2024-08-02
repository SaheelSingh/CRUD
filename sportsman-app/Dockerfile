FROM node

WORKDIR /sportsman-app

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm" , "start" ]