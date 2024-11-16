FROM node:20.16.0

WORKDIR /api-task-manager

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node", "src/server.js"]