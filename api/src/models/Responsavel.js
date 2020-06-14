const connection = require('./../database/connection');

const _table = 'responsaveis';

class Responsavel {

    async index(){
        const responsaveis = await connection(_table)
            .select('*');

        return responsaveis;
    }

    //exibir um único responsável e todos os dados pesquisando pelo seu nome
    async show(name){
        const responsavel = await connection(_table)
            .where('name', 'like', `%${name}%`)
            .select('id');

        return responsavel;
    }

    async create(name, email, phone1, phone2){

        const responsavel = await connection(_table)
            .where('email', email)
            .select('email')
            .first();
        
        if(responsavel) {
            return false;
        }
        
        await connection(_table).insert({
            name,
            email,
            phone1,
            phone2
        });


    }

    async update(id, request){
        await connection(_table).where('id', id).update(request);
    }

    async delete(id){
        await connection(_table).where('id', id).delete();
    }
}

module.exports = new Responsavel();