const aluno = require('./../models/Aluno');
const ModelResponsavel = require('./../models/Responsavel');
const AlunoService = require('./../services/AlunoService');


module.exports = {
    async index(request, response){
        //listando todos os alunos
        alunos = await aluno.index();
        return response.status(200).json(alunos);
    },

    async show(request, response){
        const { id } = request.params;
        const res = await aluno.show(id);
        
        //se o resultado da busca vir vazio, ele retornará esse resultado
        if(res.length == 0 || res == null){
            return response.status(404).json({ message: "Aluno não cadastrado" })
        }
        return response.status(200).json(res);

    },

    async create(request, response){
        const { name, email, phone, responsavel, serie_id } = request.body;

        const id = await ModelResponsavel.show(responsavel);

        AlunoService.verificaResponsavel(id[0].id, response); //método que verifica se existe responsável, pelo serviço
        AlunoService.verificaSerie(serie_id, response); //método se existe a série repassada pelo serviço

        const insert = await aluno.create( name, email, phone, id[0].id, serie_id);
        
        if(insert === false){
            return response.status(401).json({
                message: "Aluno já cadastrado!"
            })
        }

        return response.status(200).json({ 
            aluno: name,
            message: "Aluno cadastrado com sucesso!"
        });
    }, 

    async update (request, response){
        const { id } = request.params;

        await aluno.update(id, request.body);
  
        return response.status(200).json({message: "Aluno atualizado com sucesso"});

    },

    async delete(request, response){
        const { id } = request.params;

        const deletar = await aluno.delete(id);

        if(!deletar){
            return response.status(403).json({message: "Não foi possível deletar o aluno"});
        }
        return response.status(200).json({ message: "Aluno deletado com sucesso!" });

    }
}