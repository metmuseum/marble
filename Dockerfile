FROM node:lts-alpine3.14
RUN apk update && apk add git
COPY [".browserslistrc", ".gitignore", "babel.config.js", "postinstall.js", "webpack.config.js", "./package.json", "./package-lock.json", "/marble/"]
WORKDIR /marble/
RUN npm ci
EXPOSE 54525
