import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import Aluno from './../../assets/aluno.svg';
import Responsavel from './../../assets/responsavel.svg';
import Agenda from './../../assets/agenda-icon.svg';

import './style.css';

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <header>
                    <div className="row">
                        <h2>Seja Bem Vindo, <strong>Diego Paiva</strong></h2>
                        <div className="icon">
                            <FiLogOut size={25} style={{margin: "7 auto", display: "block"}} color="#fff"/>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="title">Escolhe uma seção</div>
                    <div className="card-section">
                        <div className="card-active">
                            <img src={Aluno} alt="Seção de alunos" />
                        </div>
                        <div className="card">
                            <img src={Responsavel} alt="Seção de Responsável" />
                        </div>
                        <div className="card">
                            <img className="comunicado" src={Agenda} alt="Enviar comunicados" />
                        </div>  
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;