FROM node:20-alpine

RUN corepack enable && corepack install -g yarn@4.9.4

WORKDIR /app

COPY .yarnrc.yml package.json yarn.lock

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev", "--host", "0.0.0.0"]