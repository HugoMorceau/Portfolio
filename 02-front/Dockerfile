# # Étape de construction
# FROM node:18-alpine as builder
# WORKDIR /app
# COPY package.json ./
# RUN npm install
# COPY . ./
# RUN npm run build
# COPY .next ./.next
# WORKDIR /app
# CMD ["npm", "start"]


# Étape de construction
FROM node:18-alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# Étape d'exécution
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Installez les dépendances de production uniquement si nécessaire
# RUN npm install --only=production

CMD ["npm", "start"]
