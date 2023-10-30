FROM node:alpine

WORKDIR /home/app/server

COPY package.json yarn.lock ./

RUN apk add yarn

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start:prod"]