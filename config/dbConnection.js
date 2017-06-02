var mysql = require('mysql');
module.exports = function() {
  return mysql.createConnection({
      host: 'localhost',
      user: 'edi',
      password: 'edson',
      database: 'portal_noticias'
  });
  //connection.connect();
}
