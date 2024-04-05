# Utilisation de l'image de base Node.js
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers du projet dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier tout le reste dans le répertoire de travail
COPY . .

# Exposer le port sur lequel l'application s'exécutera
EXPOSE 5000

# Commande pour exécuter l'application
CMD ["node", "app.js"]
