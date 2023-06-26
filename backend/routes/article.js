const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const articleController = require('../controllers/article');

router.get('/',auth, articleController.getAllArticle);
router.post('/',auth, articleController.createArticle);
router.get('/:id',auth, articleController.getOneArticle);
router.put('/:id',auth, articleController.modifyArticle);
router.delete('/:id',auth, articleController.deleteArticle);

module.exports = router;