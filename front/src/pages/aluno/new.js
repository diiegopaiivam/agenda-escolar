import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FiLogOut } from 'react-icons/fi';
import alunosbg from './../../assets/alunosbg.svg';
import AlunoImg from './../../assets/aluno.svg';
import api from './../../services/api';
import './style.css';

const New = () => {

    
    const [name, setName] = useState('');
    const [serie_id, setSerie] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [responsavel, setResponsavel] = useState('');

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        const data = {
            name, 
            serie_id, 
            phone, 
            email, 
            responsavel
        }

        try {
            await api.post('/alunos', data);
            history.push('/aluno');
        } catch(err){
            alert('Aluno não cadastrado');
        }


    }


    return (
        <div className="home">
            <div className="container">
                <header>
                    <div className="row">
                        <h2>Seja Bem Vindo, <strong>Diego Paiva</strong></h2>
                        <img src={AlunoImg} alt="Aluno" />
                        <div className="icon">
                            <FiLogOut size={25} style={{margin: "7 auto", display: "block"}} color="#fff"/>
                        </div>
                    </div>
                </header>
                <div className="section-new">
                    <img src={alunosbg} alt="alunos" />
                    <div className="form-card">
                        <h1>Cadastrar Aluno</h1>
                        <form onSubmit={handleSubmit}>
                            <input name="name" value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Nome Completo" />
                            <div className="form-group">
                                <input name="serie" value={serie_id} onChange={e => setSerie(e.target.value)} type="text" placeholder="Série" />
                                <input name="phone" value={phone} onChange={e => setPhone(e.target.value)} type="text" placeholder="Seu Telefone" />
                            </div>
                            <input name="email" value={email} onChange={e => setEmail(e.target.value)} type="e-mail" placeholder="Email do aluno" />
                            <input name="responsavel" value={responsavel} onChange={e => setResponsavel(e.target.value)} type="text" placeholder="Nome do responsável" />
                            <button type="submit">Cadastrar Aluno</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New;