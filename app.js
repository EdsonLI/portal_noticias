var app = require('./config/server');

//var rotaHome = require('./app/routes/home')(app);
//rotaHome(app);

//var rotaNoticias = require('./app/routes/noticias')(app);
//rotaNoticias(app);

//var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
//rotaFormInclusaoNoticia(app);

app.listen(3000, function() {
    console.info('Servidor rodando com express na porta 3000');
    //console.info(msg());
});
