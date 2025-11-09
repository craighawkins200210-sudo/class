FROM node:24-alpine3.21

COPY package.json /usr/app/

COPY src /usr/app/

WORKDIR /usr/app

RUN npm install

CMD ["node", "server.js"]