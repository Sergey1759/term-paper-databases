var mysql = require('mysql');

    // Add the credentials to access your database
  var connection = mysql.createConnection({
    host     : 'remotemysql.com',
    user     : 'hwP3O0SdHy',
    password : 'LeJ2m1xhQJ',
    database : 'hwP3O0SdHy'
  });
  
  // connect to mysql
  connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
  });

  let data = {};
  data.all = () => {
    return new Promise((resolve,reject) => {
        connection.query(`select command.id, command.command, description.description, exemple.exemple 
                            from command join exemple on command.id = exemple.id 
                            join description on command.id = description.id`, 
            function(err, rows, fields) {
            if(err){
                return reject(err);
            }
                return resolve(rows);
          });
    })
  }

//   // Close the connection
//   connection.end(function(){
//     // The connection has been closed
//   });


  module.exports = data;