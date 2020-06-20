const Serie = require('./../models/Serie');
const Responsavel = require('./../models/Responsavel');

module.exports = {
    async index(request, response){
        const res = await Serie.index();
        return response.status(200).json(res);
    },

    async showSerie(request, response){
        const { serie_id } = request.query;

        const alunos = await Serie.getAlunosPorSerie(serie_id);

        if(alunos.length == 0 || alunos == null){
            return response.status(404).json({ message: "Não há alunos cadastrados nessa série" })
        }

        return response.status(200).json(alunos);
    },

    async create(request, response){
        const { serie, turma, turno } = request.body;

        await Serie.create(serie, turma, turno);

        return response.status(200).json({ 
            message: "Série cadastrado com sucesso!"
        });
    },

    async show(request, response){
        const { serie_id, responsavel, name } = request.query;
        
        //Se vier apenas a série da requisição, exibirá todos os alunos na mesma série
        if(responsavel.length == [] && name.length == [] ){
            var responsable = 0;
            var nome = "";
            const aluno = await Serie.show(serie_id, responsable , nome);

            return response.status(200).json(aluno);
        }

        //Se vier serie_id e nome do aluno 
        if(responsavel.length == []){
            var responsable = 0;
            const aluno = await Serie.show(serie_id, responsable , name);

            return response.status(200).json(aluno);
        }

        const resp = await Responsavel.show(responsavel); //pegando dados de um responsável passando o nome como parâmetro
        
        if (resp.length == [] || resp == null){
            return response.status(404).json({ message: "Responsável não encontrado! "})
        }
        /**
         * método que pega o aluno passando como parâmetros o id da série, o id do responsável e o nome do aluno
         */
        const aluno = await Serie.show(serie_id, resp[0].id, name); 

        return response.status(200).json(aluno);
    }
}