FROM node:16
WORKDIR /usr/app
RUN apt update -y && apt install -y netcat
COPY package*.json ./
RUN npm i
COPY ./ ./
CMD [ "./start.sh", "node server.js" ]
