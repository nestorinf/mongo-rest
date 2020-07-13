FROM node:14

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install --only=production

RUN npm install --only=development

COPY [".", "/usr/src/"]

EXPOSE 3400

CMD ["npm", "test", "index.js"]