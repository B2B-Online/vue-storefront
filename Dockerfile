FROM node:10-alpine

ENV VS_ENV dev
ENV NODE_CONFIG_ENV=docker
ENV VS_ENV=prod
ENV BIND_HOST=0.0.0.0
ENV PM2_ARGS=--no-daemon

WORKDIR /var/www

COPY package.json ./
COPY yarn.lock ./

RUN apk add --no-cache --virtual .build-deps ca-certificates wget git \
  && yarn install --no-cache \
  && apk del .build-deps

COPY docker/vue-storefront/vue-storefront.sh /usr/local/bin/

COPY babel.config.js /var/www/ 
ADD config /var/www/config
ADD core /var/www/core
COPY ecosystem.json /var/www/
COPY .eslintignore /var/www/
COPY .eslintrc.js /var/www/
COPY lerna.json /var/www/
COPY tsconfig.json /var/www/
COPY tsconfig-build.json /var/www/
COPY shims.d.ts /var/www/
COPY package.json /var/www/
ADD src /var/www/src
ADD var /var/www/var

CMD ["vue-storefront.sh"]
