const responsavel = require('./../models/Responsavel');


module.exports = {
    async index(request, response){
        responsaveis = await responsavel.index();
        return response.status(200).json(responsaveis);
    },

    async show(request, response){
        const { name } = request.query;
        
        const nameResp = await responsavel.show(name);

        return response.status(200).json(nameResp);
    },

    async create(request, response){
        const { name, email, phone1, phone2 } = request.body;

        const insert = await responsavel.create(name, email, phone1, phone2);
        
        if(insert === false){
            return response.status(401).json({
                message: "Usuário já cadastrado!"
            })
        }

        return response.status(200).json({ 
            responsavel: name,
            message: "Responsável cadastrado com sucesso!"
        });
    }, 

    async update (request, response){
        const { id } = request.params;

        await responsavel.update(id, request.body);
  
        return response.status(200).json({message: "Usuario atualizado com sucesso"});

    },

    async delete(request, response){
        const { id } = request.params;

        const deletar = await responsavel.delete(id);

        if(!deletar){
            return response.status(403).json({message: "Não foi possível deletar usuario"});
        }
        return response.status(200).json({ message: "Responsável deletado com sucesso!" });

    }
}