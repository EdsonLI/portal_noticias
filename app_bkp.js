/*var express = require('express');*/
//var msg = require('./mod_teste');

/*var app = express();

app.set('view engine', 'ejs');*/

/*app.get('/tecnologia', function(req, res) {
    res.send('<html><body>Notícias de Tecnologia</body></html>');
});*/

/*app.get('/tecnologia', function(req, res) {
    //res.render('secao/tecnologia/');
    res.render('secao/tecnologia');
});
app.get('/', function(req, res) {
    res.send('<html><body>Portal de Notícias</body></html>');
});*/

var app = require('./config/server');

var rotaHome = require('./app/routes/home')(app);
//rotaHome(app);

var rotaNoticias = require('./app/routes/noticias')(app);
//rotaNoticias(app);

var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
//rotaFormInclusaoNoticia(app);

/* NOVAS ROTAS A PARTIR DA INCLUSAO DAS VIEWS - ADQUIRIDAS PELO DOWNLOAD - AULAS 13 e 14 */
/*app.get('/', function(req, res) {
    res.render('home/index');
});

app.get('/formulario_inclusao_noticia', function(req, res) {
    res.render('admin/form_add_noticia');
});

app.get('/noticias', function(req, res) {
    res.render('noticias/noticias');
});*/

app.listen(3000, function() {
    console.info('Servidor rodando com express na porta 3000');
    //console.info(msg());
});

/* teste teste teste teste */
