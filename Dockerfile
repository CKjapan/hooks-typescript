FROM node:alpine
EXPOSE 3000

RUN \
  apk add --no-cache python make g++ && \
  apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
  rm -fR /var/cache/apk/*

WORKDIR /app
COPY ./package.json .
RUN npm install && npm cache clean --force
COPY . .
