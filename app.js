var express = require('express');
var app = express();

app.set('view engine', 'ejs');

/*app.get('/tecnologia', function(req, res) {
    res.send('<html><body>Notícias de Tecnologia</body></html>');
});*/
app.get('/tecnologia', function(req, res) {
    //res.render('secao/tecnologia/');
    res.render('secao/tecnologia');
});

app.get('/', function(req, res) {
    res.send('<html><body>Portal de Notícias</body></html>');
});

app.listen(3000, function() {
    console.info('servidor rodando com express na porta 3000');
    
})