FROM node
WORKDIR /index
COPY package.json /index
RUN npm install
COPY . /index
CMD ["node","index.js"]
EXPOSE 9000