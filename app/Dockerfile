FROM node:20

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY ./public ./public

COPY app.js .

EXPOSE 3000

USER node

CMD ["npm", "start"]