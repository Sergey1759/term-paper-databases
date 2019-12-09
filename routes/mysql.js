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

  data.one = (id) => {
    return new Promise((resolve,reject) => {
        connection.query(`select command.id, command.command, description.description, exemple.exemple 
                            from command join exemple on command.id = exemple.id 
                            join description on command.id = description.id
                            where description.id = ?` ,[id],
            function(err, rows, fields) {
            if(err){
                return reject(err);
            }
                return resolve(rows[0]);
          });
    })
  }

  data.createCommand = (command) => {
    return new Promise((resolve,reject) => {
        connection.query(
        `INSERT INTO command(command)
        VALUES('` + command + `');
        ` ,
            function(err, rows, fields) {
            if(err){
                return reject(err);
            }
                return resolve(rows[0]);
          });
    })
  }
  data.createDescription = (description) => {
    return new Promise((resolve,reject) => {
        connection.query(
        `INSERT INTO description(description)
        VALUES('` + description + `');
        ` ,
            function(err, rows, fields) {
            if(err){
                return reject(err);
            }
                return resolve(rows[0]);
          });
    })
  }
  data.createExemple = (exemple) => {
    return new Promise((resolve,reject) => {
        connection.query(
        `INSERT INTO exemple(exemple)
        VALUES('` + exemple + `');
        ` ,
            function(err, rows, fields) {
            if(err){
                return reject(err);
            }
                return resolve(rows[0]);
          });
    })
  }

  data.search = (word) => {
    return new Promise((resolve,reject) => {
        connection.query(`select command.id, command.command, description.description, exemple.exemple 
        from command join exemple on command.id = exemple.id 
        join description on command.id = description.id 
        where description.description LIKE '%`+ word +`%' 
        or command.command LIKE '%` + word + `%' 
        or exemple.exemple LIKE '%`+ word +`%' ` ,
            function(err, rows, fields) {
            if(err){
                return reject(err);
            }
                return resolve(rows);
          });
    })
  }
//UPDATE exemple SET exemple = 'Pluton' WHERE ID = 1
  data.changeExemple = (exemple,id) => {
    return new Promise((resolve,reject) => {
        connection.query(
        `UPDATE exemple SET exemple = '` + exemple + `' WHERE ID = `+ id +`` ,
            function(err, rows, fields) {
            if(err){
                return reject(err);
            }
                return resolve(rows[0]);
          });
    })
  }

  data.changeDescription = (description,id) => {
    return new Promise((resolve,reject) => {
        connection.query(
        `UPDATE description SET description = '` + description + `' WHERE ID = `+ id +`` ,
            function(err, rows, fields) {
            if(err){
                return reject(err);
            }
                return resolve(rows[0]);
          });
    })
  }

  data.changeCommand = (command,id) => {
    return new Promise((resolve,reject) => {
        connection.query(
        `UPDATE command SET command = '` + command + `' WHERE ID = `+ id +`` ,
            function(err, rows, fields) {
            if(err){
                return reject(err);
            }
                return resolve(rows[0]);
          });
    })
  }
  //delete from customers where customers.customerID = 2
  data.deleteCommand = (id) => {
    return new Promise((resolve,reject) => {
        connection.query(
        `DELETE from command WHERE command.id = `+ id +`` ,
            function(err, rows, fields) {
            if(err){
                return reject(err);
            }
                return resolve(rows[0]);
          });
    })
  }
  data.deleteExemple = (id) => {
    return new Promise((resolve,reject) => {
        connection.query(
          `DELETE from exemple WHERE exemple.id = `+ id +`` ,
            function(err, rows, fields) {
            if(err){
                return reject(err);
            }
                return resolve(rows[0]);
          });
    })
  }
  data.deleteDescription = (id) => {
    return new Promise((resolve,reject) => {
        connection.query(
          `DELETE from description WHERE description.id = `+ id +`` ,
            function(err, rows, fields) {
            if(err){
                return reject(err);
            }
                return resolve(rows[0]);
          });
    })
  }




//   // Close the connection
//   connection.end(function(){
//     // The connection has been closed
//   });


  module.exports = data;