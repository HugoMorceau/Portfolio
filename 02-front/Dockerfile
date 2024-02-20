# Étape de construction
FROM node:18-alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build
COPY .next ./.next
WORKDIR /app
CMD ["npm", "start"]