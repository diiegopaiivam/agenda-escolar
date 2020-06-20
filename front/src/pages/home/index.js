import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import Aluno from './../../assets/aluno.svg';
import Responsavel from './../../assets/responsavel.svg';
import Agenda from './../../assets/agenda-icon.svg';
import { Link } from 'react-router-dom';

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
                        <Link style={{textDecoration: 'none'}} to="/aluno">
                            <div className="card">
                                <img src={Aluno} alt="Seção de alunos" />
                                <p className="description">Alunos</p>
                            </div>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to="/responsavel">
                            <div className="card">
                                <img src={Responsavel} alt="Seção de Responsável" />
                                <p className="description">Responsavel</p>
                            </div>
                        </Link>
                        <Link style={{textDecoration: 'none'}} to="/comunicado">
                            <div className="card">
                                <img className="comunicado" src={Agenda} alt="Enviar comunicados" />
                                <p className="description-comunicado">Enviar Comunicado</p>
                            </div>  
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;