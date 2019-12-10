var express = require('express');
var router = express.Router();


const IndexController = require('../controller/index_controlles');
const indexController = new IndexController();
/* GET home page. */
router.get('/', indexController.index());
router.post('/contato', indexController.enviaEmail())

module.exports = router;