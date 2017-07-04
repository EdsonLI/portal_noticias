module.exports = function(application) {
    application.get('/formulario_inclusao_noticia', function(req, res) {
        res.render('admin/form_add_noticia', {validacao: null});
    });
    application.post('/noticias/salvar', function(req, res) {
        var noticia = req.body;
        //res.send(noticia);

        req.assert('titulo','O título é obrigatório!').notEmpty();
        req.assert('resumo','O resumo é obrigatório!').notEmpty();
        req.assert('resumo','O resumo deve conter entre 10 e 100 caracteres!').len(10, 100);
        req.assert('autor','O nome do autor é obrigatório!').notEmpty();
        req.assert('data_noticia','A data é obrigatória!').notEmpty();
        req.assert('data_noticia','O campo data deve conter formato válido para data!').isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia','O texto da notícia é obrigatório!').notEmpty();

        var erros = req.validationErrors();

        if(erros) {
           //console.info(erros);
           //res.redirect('/formulario_inclusao_noticia');
           res.render('admin/form_add_noticia', {validacao: erros});
           return;
        }

        // conexao
        let connection = application.config.dbConnection();

        // model
        let noticiasModel = new application.app.models.NoticiasDAO(connection);

        // salvarNoticia
        noticiasModel.salvarNoticia(noticia, function(error, result) {
            res.redirect('/noticias');
        });

    });
}
