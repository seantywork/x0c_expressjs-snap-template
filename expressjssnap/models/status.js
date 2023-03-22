

const config = require('../config');

module.exports = {

  getHealth: async function(uid, passwd){

    var health_check = {}

    if (uid == 'elephant' && passwd == 'nose') {

      health_check = { healthy: true, check: 'secret_token_0010103994'}

    } else {

      health_check = { healthy: false, check: 'rejected'}
    }


    return health_check

  }
};
