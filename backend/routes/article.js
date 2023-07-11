const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const articleController = require('../controllers/article');

router.get('/', articleController.getAllArticle);
router.post('/',auth, articleController.createArticle);
router.get('/:id', articleController.getOneArticle);
router.put('/:id',auth, articleController.modifyArticle);
router.delete('/:id',auth, articleController.deleteArticle);

module.exports = router;