var mysql = require('mysql');
var connMySQL = function() {
  return mysql.createConnection({
      host: 'localhost',
      user: 'edi',
      password: 'edson',
      //database: 'portal_noticias'
      database: 'porta_noticias'
  });
  //connection.connect();
}

module.exports = function() {
    console.info('autoload carregou modulo de conexao com o MySQL');
    return connMySQL;
}
