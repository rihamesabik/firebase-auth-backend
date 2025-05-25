# Étape 1 : build
FROM node:18-alpine AS build

WORKDIR /app

# ✅ Copier les fichiers package.json + package-lock.json (le contexte est déjà ./frontend)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# ✅ Copier tout le code source frontend
COPY . .

# Build production
RUN npm run build

# Étape 2 : servir avec un serveur léger (nginx)
FROM nginx:stable-alpine

# Copier le build dans le dossier nginx
COPY --from=build /app/build /usr/share/nginx/html

# (Optionnel) Configuration NGINX personnalisée
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
