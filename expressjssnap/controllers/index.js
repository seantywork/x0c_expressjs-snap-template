const config = require('../config');

const modelsIndex = require('../models/index');

module.exports = {

  getIndex: function(req,res){

    res.render('index')

  },

  searchWord: async function(req,res){

    var x = req.body["query"]


    var ret_val = await modelsIndex.searchWord(x)


    res.json(ret_val)


  }

}
