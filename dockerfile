FROM node:alpine

WORKDIR /app

COPY . /app/

RUN npm ci

EXPOSE 5000

CMD ["npm","run","start"]