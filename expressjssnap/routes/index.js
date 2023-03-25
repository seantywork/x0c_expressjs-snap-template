

var config = require('../config')

const controllersIndex = require('../controllers/index');

module.exports =  function (router) {


  router.get('/', controllersIndex.getIndex)

  router.post('/sendme', controllersIndex.searchWord);


  return router;
};