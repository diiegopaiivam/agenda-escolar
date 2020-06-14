const express = require('express');
//validações
const { Segments, celebrate, Joi } = require('celebrate');
//final de validações
const routes = express.Router();

//rotas referentes aos responsaveis
const ResponsavelController = require('./controllers/ResponsavelController');
routes.get('/responsaveis', ResponsavelController.index);
routes.get('/responsavel', ResponsavelController.show);
routes.post('/responsaveis', celebrate({
    //validações responsaveis
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().min(4),
        email: Joi.string().required().email(),
        phone1: Joi.string().required().min(9).max(10),
        phone2: Joi.string().min(9).max(10),
    }),
}), ResponsavelController.create);
routes.put('/responsaveis/:id', ResponsavelController.update);
routes.delete('/responsaveis/:id', ResponsavelController.delete);

//Rotas referentes a serie
const SerieController = require('./controllers/SerieController');
routes.get('/serie', SerieController.index);
routes.post('/serie', SerieController.create);
routes.get('/series', SerieController.show); //Rota para listar alunos de uma série específica passando nome do responsável e serie como parâmetro

//Rotas referentes aos alunos
const AlunoController = require('./controllers/AlunoController');
routes.get('/alunos', AlunoController.index);
routes.get('/alunos/:id', AlunoController.show);
routes.post('/alunos', celebrate({
    //validações alunos
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().min(4),
        email: Joi.string().required().email(),
        phone: Joi.string().required().min(9).max(10),
        responsavel: Joi.string().required(),
        serie_id: Joi.string().required(),
    }),
}), AlunoController.create);

routes.put('/alunos/:id', AlunoController.update);
routes.delete('/alunos/:id', AlunoController.delete);

module.exports = routes;