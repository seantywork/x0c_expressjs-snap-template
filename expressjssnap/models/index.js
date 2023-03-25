var mysql_prom = require('mysql2/promise');
const { DB_HOST, DB_PASS } = require('../config');

const config = require('../config');

var db_host = config.DB_HOST
var db_pass = config.DB_PASS



module.exports = {

  searchWord: async function(query){

    var ca_query = '%'+query+'%'

    try {

      var con = await mysql_prom.createConnection({
        host: db_host,
        user: "seantywork",
        password: db_pass,
        port: 3306,
        database: 'test'
      })
      
      var res_arr = await con.query('SELECT IDX, WORD FROM words_alpha WHERE WORD LIKE ?;',[ca_query])

      var data = res_arr[0]

      if (data.length == 0){

        data = [{"IDX":'Not Availabe',"WORD":"No Such Entry: "+query}] 

        var context = {'RES':data, 'STATUS':'y'}

      } else { 

        var context = {'RES':data, 'STATUS':'y'}
    
      }
  

    } catch (e){

      var data = 'Failed : ' + e
      var context = {'RES':data, 'STATUS':'n'}

    } finally{

      con.close()

    }

    return context


  }
};
