FROM node:10.22.0-alpine3.11
# FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "app.js"]