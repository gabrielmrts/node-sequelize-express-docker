FROM node:14
WORKDIR /var/www/app
ADD src .
RUN npm install && npm install -g nodemon
EXPOSE 3030
CMD ["nodemon", "server.js"]