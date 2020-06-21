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
    async show(serie_id, responsavel_id, nome, page){
        
        if(responsavel_id == 0 && nome == 1){

            const alunos = await connection('alunos')
            .join('series', 'alunos.serie_id', '=', 'series.id')
            .join('responsaveis', 'alunos.responsavel_id', '=', 'responsaveis.id')
            .where('serie_id', serie_id)
            .limit(5)
            .offset((page - 1)*5)
            .distinct()
            .select('alunos.id','alunos.name as nome', 'alunos.email', 'alunos.phone', 'responsaveis.name as responsavel','series.serie');
    
            return alunos;
        } 

        if(responsavel_id == 0){
            const alunos = await connection('alunos')
            .join('series', 'alunos.serie_id', '=', 'series.id')
            .join('responsaveis', 'alunos.responsavel_id', '=', 'responsaveis.id')
            .where('alunos.name', nome)
            .where('serie_id', serie_id)
            .distinct()
            .select('alunos.id','alunos.name as nome', 'alunos.email', 'alunos.phone', 'responsaveis.name as responsavel','series.serie');

            return alunos;
        }

        const alunos = await connection('alunos')
        .join('series', 'alunos.serie_id', '=', 'series.id')
        .join('responsaveis', 'alunos.responsavel_id', '=', 'responsaveis.id')
        .where('responsavel_id', responsavel_id )
        .where('alunos.name', nome)
        .where('serie_id', serie_id)
        .distinct()
        .select('alunos.id', 'alunos.name as nome', 'alunos.email', 'alunos.phone', 'responsaveis.name as responsavel','series.serie');

        return alunos;
    }

}

module.exports = new Serie();