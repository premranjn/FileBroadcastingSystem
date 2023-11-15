FROM node:16
WORKDIR /usr/app
COPY package*.json ./
RUN npm i
RUN apt update -y && apt install -y netcat
COPY ./ ./
CMD [ "./start.sh", "node server.js" ]
