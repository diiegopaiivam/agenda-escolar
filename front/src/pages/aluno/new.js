import React from 'react';

import { FiLogOut } from 'react-icons/fi';
import alunosbg from './../../assets/alunosbg.svg';
import AlunoImg from './../../assets/aluno.svg';
import './style.css';

const New = () => {
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
                        <form>
                            <input type="text" placeholder="Nome Completo" />
                            <div className="form-group">
                                <input type="text" placeholder="Série" />
                                <input type="text" placeholder="Seu Telefone" />
                            </div>
                            <input type="e-mail" placeholder="Email do aluno" />
                            <input type="text" placeholder="Nome do responsável" />
                            <button type="submit">Cadastrar Aluno</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New;