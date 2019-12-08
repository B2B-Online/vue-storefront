#!/bin/sh
set -e

yarn install || exit $?
yarn build || exit $?
yarn dev
#yarn build:client && yarn build:server && yarn build:sw #|| exit $?

#yarn dev

#if [ "$VS_ENV" = 'dev' ]; then
#  yarn dev
#else
#  yarn start
#fi
