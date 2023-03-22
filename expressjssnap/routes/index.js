const express = require('express');

var config = require('../config')

const controllersIndex = require('../controllers/index');
const controllersStatus = require('../controllers/status');
// const users = require('../src/users/routes');
// const validateAuth = require('../middlewares/validateAuth');
// const getData = require('../middlewares/getData');

module.exports =  function (router) {


  router.get('/', controllersIndex.getIndex)

  router.post('/getStatus', controllersStatus.getStatus);
  //app.use('/users', users);
  // app.use('/users', validateAuth.checkIfAuthenticated, getData.getGeoip, users);
  //app.use('*', (req, res) => {
  //  res.send('Not found!!!');
  //});

  return router;
};