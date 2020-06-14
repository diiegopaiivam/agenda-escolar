const connection = require('./../database/connection');
const _table = 'series';

class Serie {

    async index(){
        const responsavel = await connection(_table)
            .select('*');
        
        return responsavel;
    }

    async create(serie, turma, turno){
        
        await connection(_table).insert({
            serie,
            turma,
            turno
        });

    }

    //método que busca um ou vários alunos de uma série espécifica passando serie, responsável e nome
    //O responsável id já vem de um tratamento do controller
    async show(serie_id, responsavel_id, name){
        const alunos = await connection('alunos')
        .join('series', 'alunos.serie_id', '=', 'series.id')
        .where('responsavel_id', responsavel_id )
        .where('name', name)
        .where('serie_id', serie_id)
        .distinct()
        .select('alunos.*');

        return alunos;
    }

}

module.exports = new Serie();