const connection = require('./../database/connection');

const _table = 'alunos';

class Aluno {

    async index(){
        const alunos = await connection(_table)
            .join('series', 'alunos.serie_id', '=', 'series.id')
            .join('responsaveis', 'alunos.responsavel_id', '=', 'responsaveis.id')
            .distinct()
            .select('alunos.*', 'responsaveis.name as responsavel', 'series.serie');

        return alunos;
    }
    
    async show(id, response){
        const aluno = await connection(_table).where('id', id).select('*');
        return aluno;
    }

    async create(name, email, phone, responsavel_id, serie_id){

        const aluno = await connection(_table)
            .where('email', email)
            .select('email')
            .first();
        
        if(aluno) {
            return false;
        }
      
        await connection(_table).insert({
            name,
            email,
            phone,
            responsavel_id,
            serie_id
        });


    }

    async update(id, request){
        await connection(_table).where('id', id).update(request);
    }

    async delete(id){
        await connection(_table).where('id', id).delete();
    }



}

module.exports = new Aluno();