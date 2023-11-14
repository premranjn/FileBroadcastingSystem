FROM node:16
WORKDIR /usr/app
COPY package*.json ./
RUN npm i
COPY ./ ./
# ENTRYPOINT [ "./start.sh" ]
CMD [ "./start.sh", "node server.js" ]
