FROM node:14.4.0
LABEL maintainer="Yin Zhou <yin.zhou@axcessiom.ca>"
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
EXPOSE 4200
CMD ng serve --host 0.0.0.0