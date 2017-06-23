//var dbConnection = require('../../config/dbConnection');

module.exports = function(application) {
    //var connection = dbConnection();    

    application.get('/noticias', function(req, res) {
        let connection = application.config.dbConnection();
        let noticiasModel = application.app.models.noticiasModel;
        
        noticiasModel.getNoticias(connection, function(error, result) {           
            res.render('noticias/noticias', {noticias: result});
        });
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
