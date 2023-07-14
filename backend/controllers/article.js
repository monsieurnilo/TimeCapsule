const Article = require('../models/article')

exports.createArticle = (req, res) => {
    const article = new Article({
      title : req.body.title,
      contenu : req.body.contenu,
      tag : req.body.tag,
      source : req.body.source,
      date : new Date()
    });
    article.save().then(
        () => {
            res.status(201).json({ 
                message: 'Article enregistré !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({ 
                error: error 
            });
        }
    );
  };

exports.getOneArticle= (req, res, next) => {
    Article.findOne({ _id: req.params.id })
    .then(
        (article) => {
          res.status(200).json(article);
        }
      ).catch(
        (error) => {
          res.status(404).json({
            error: error
          });
        }
    );
};

exports.modifyArticle = (req, res, next) => {
    const article = new Article({
        _id: req.params.id,
        title : req.body.title,
        contenu : req.body.contenu,
        tag : req.body.tag,
        source : req.body.source,
        date : req.body.date
      });
      console.log(req.params.id)
    Article.updateOne({ _id: req.params.id }, article).then(
        () => {
            res.status(200).json(
                { message: 'article modifié avec succés !'
            });
        }
    ).catch(
        (error) => {
            console.log(error)
            res.status(400).json({
                error: error
            });
        }
    );
  };

exports.deleteArticle = (req, res, next) => {
    Article.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({ 
                message: 'artcile supprimé avec succés !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({ 
                error: error 
            });
        }
    );
};

exports.getAllArticle = (req, res, next) => {
    Article.find().then(
        (articles) => {
            res.status(200).json(articles);
        }
    ).catch(
        (error) => {
            res.status(400).json({ 
                error: error 
            });
        }
    );
  };
