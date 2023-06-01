const express = require('express');
const mongoose = require('mongoose');
const Article = require('./models/article');

const app = express();

mongoose.connect('mongodb+srv://timecapsule:f3ZYIHDpX7xPiXtf@timecapsule.7vjj9ei.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/getAllArticle', (req, res, next) => {
    Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
  });

  app.post('/addArticle', (req, res, next) => {
    delete req.body._id;
    const article = new Article({
      ...req.body
    });
    article.save()
      .then(() => res.status(201).json({ message: 'Article enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });

module.exports = app;