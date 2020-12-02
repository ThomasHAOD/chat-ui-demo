FROM node:14.1-alpine AS builder

WORKDIR /opt/web
COPY package.json yarn.lock ./
RUN yarn

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN yarn build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /opt/web/build .
CMD ["serve", "-p", "80", "-s", "."]
