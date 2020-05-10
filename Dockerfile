FROM node:10

# Create app directory
WORKDIR /usr/web/nicerdicer

# COPY FILES
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY *.json ./
COPY browserslist ./
COPY src ./src

RUN npm install

EXPOSE 4200

CMD [ "npm", "run", "start" ]