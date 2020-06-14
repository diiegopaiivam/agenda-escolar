const connection = require('./../database/connection');

class AlunoService {
    //método que verifica se o responsável repassado existe no banco
    async verificaResponsavel(responsavel_id, response, next){
        const responsavel = await connection('responsaveis')
        .where('id', responsavel_id)
        .select('*')
        .first();

        //se não existir responsável, informa para solicitar um novo responsável
        if(!responsavel){
            return response.status(400).json({ message: "Informar corretamente um responsável" });
        }

        //se existir passa a diante para a próxima linha do controller
        next();
    }

    //método que verifica se a série repassada existe no banco
    async verificaSerie(serie_id, response, next){
        const serie = await connection('series')
        .where('id', serie_id)
        .select('*')
        .first();

        //se não existir, já retornar uma mensagem solicitando para repassar novamente a série
        if(!serie){
            return response.status(400).json({ message: "Informar corretamente uma série" });
        }

        //se existir passa para a próxima linha do controller

        next();
    }
   
}

module.exports = new AlunoService();