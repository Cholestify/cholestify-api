
FROM node:18


WORKDIR /app


COPY package.json package-lock.json ./


RUN npm install


COPY . .


ENV DATABASE_URL=""
ENV JWT_SECRET=""


EXPOSE 8080


CMD ["npm", "start"]