FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run generate-schema

RUN npm run build

RUN apt-get update && apt-get install -y wait-for-it

EXPOSE 3000

# Command to wait for the database, generate Prisma schema, and start the app
CMD ["bash", "-c", "wait-for-it db:3306 -- npm run migrate-and-start"]
