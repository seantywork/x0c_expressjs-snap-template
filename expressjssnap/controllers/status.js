const config = require('../config');

const modelsStatus = require('../models/status');


module.exports = {

  getStatus: async function(req,res){


    var uid = req.body["uid"]
    var passwd = req.body["passwd"]

    var retval = await modelsStatus.getHealth(uid, passwd)

    res.send(retval)
  }

}
