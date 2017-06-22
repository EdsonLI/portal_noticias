//var dbConnection = require('../../config/dbConnection');

module.exports = function(app) {
    //var connection = dbConnection();    

    app.get('/noticias', function(req, res) {
        let connection = app.config.dbConnection();
        connection.query('select * from noticias', function(error, result) {
            //console.info('passou aqui...');
            //res.send(result);

            res.render('noticias/noticias', {noticias: result});
        });
        //res.render('noticias/noticias');
    });
}
/*module.exports = function(app) {
    app.get('/noticias', function(req, res) {
      var mysql = require('mysql');
      var connection = mysql.createConnection({
        host: 'localhost',
        user: 'edi',
        password: 'edson',
        database: 'portal_noticias'
      });
      connection.connect();

      connection.query('SELECT * FROM noticias', function(err, rows, fields) {
        if (err) throw err;
          console.log(rows[0]);
        });

      connection.end();
    });
}*/
