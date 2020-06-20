import React from 'react';
import { FiLogOut, FiPlus, FiSearch } from 'react-icons/fi';

import './style.css';

const Aluno = () => {
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
                    <div className="title">Alunos</div>
                    <form>
                        <div className="row">
                            <div className="form-group">
                                <select>
                                    <option value="1">1ª Serie</option>
                                    <option value="2">2ª Serie</option>
                                    <option value="3">3ª Serie</option>
                                </select>
                                <input className="name" placeholder="Nome do Aluno" />
                                <input placeholder="Nome do Responsável" />
                            </div>
                            <div className="adicionais">
                                <button><FiPlus size={20} color="#4CB0E3" /></button>
                                <button><FiSearch size={20} color="#4CB0E3" /></button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Aluno;