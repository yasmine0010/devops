const express = require('express');
const mongoose = require('mongoose');

const app = express();
const taskRoutes = require('./routes/taskRoutes');

// Middleware pour le parsing du JSON
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/devops1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Routes de l'API
app.use('/api/tasks', taskRoutes);

// Port d'écoute du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
