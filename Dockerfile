FROM node:18.13.0

# ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

CMD npm run start

