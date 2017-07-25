FROM node:8

WORKDIR /usr/src/app

ADD package.json yarn.lock /usr/src/app/

RUN yarn 

ADD . /usr/src/app/

CMD npm start