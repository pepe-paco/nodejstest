FROM node:8
MAINTAINER fvilla622@gmail.com
WORKDIR /usr/src/app
RUN cd /usr/src/app
COPY package*.json ./
COPY node_modules /.
COPY index*.js ./
COPY package-lock.json /.
EXPOSE 3000
RUN npm install