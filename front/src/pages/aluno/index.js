import React, { Component } from 'react';
import { FiLogOut, FiPlus, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import TableAluno from './table';
import AlunoImg from './../../assets/aluno.svg';

import api from './../../services/api';

import './style.css';

export default class Aluno extends Component {
    state = {
        series: [],
        page: 1,
        name: '',
        marked: '',
        responsavel: '',
        alunos: [],
        serie_id: '',
        selecao_alunos: [],
        error: ''
    };
    
    componentWillMount(){
        api.get('/serie').then(response => {
            this.setState({series: response.data});
        });
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        await api.get('/series', {
            params: {
                serie_id: this.state.serie_id,
                responsavel: this.state.responsavel,
                name: this.state.name,
                page: this.state.page
            }
        }).then(response => {
            this.setState({alunos: response.data, tabela: 1}); 
        });
        
    }

    handleOnChange = e => {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value 
        });
    };
    

    handleCheckbox = (e) => {
        const selecao_alunos = { ...this.state.selecao_alunos, [e.target.name]: (e.target.checked === true ? 1 : 0) };
        this.setState({ selecao_alunos });
    };

    
    
    render(){
        return ( 
            <div className="home">
                <div className="container">
                    <header>
                        <div className="row">
                            <h2>Seja Bem Vindo, <strong>Diego Paiva</strong></h2>
                            <img src={AlunoImg} alt="Aluno" />
                            <div className="icon">
                                <Link to="/"><FiLogOut size={25} style={{margin: "7 auto", display: "block"}} color="#fff"/></Link>
                            </div>
                        </div>
                    </header>
                    <section>
                        <div className="title">Alunos</div>
                        <form>
                            <div className="row">
                                <div className="form-group">
                                    <select onChange={this.handleOnChange} name="serie_id" value={this.serie_id}>
                                        <option value="0">Selecione uma Série</option>
                                        {this.state.series.map(serie => (
                                            <option key={serie.id} value={serie.id}>{serie.serie}</option>
                                        ))}
                                    </select>
                                    <input type="text" onChange={this.handleOnChange} name="name" value={this.name} className="name" placeholder="Nome do Aluno" />
                                    <input type="text" onChange={this.handleOnChange} name="responsavel" value={this.responsavel} placeholder="Nome do Responsável" />
                                </div>
                                <div className="adicionais">
                                    <button><Link to="/new"><FiPlus size={35} color="#4CB0E3" title="Cadastrar Aluno" /></Link></button>
                                    <button type="submit" onClick={this.handleSubmit}><FiSearch size={30} color="#4CB0E3" title="Pesquisar Aluno" /></button>
                                </div>
                            </div>
                        </form>
                        <TableAluno
                        {...this.state}
                        handleOnChange={this.handleOnChange}
                        handleCheckbox={this.handleCheckbox}
                        />
                    </section>
                </div>
            </div>
        );
    }
}

    