FROM node:18.16

WORKDIR /app
COPY ./package.json .

RUN npm cache clean --force
RUN npm install
COPY . .

CMD npm start