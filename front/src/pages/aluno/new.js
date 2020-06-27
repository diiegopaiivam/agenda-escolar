import React, { Component } from 'react';

import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import alunosbg from './../../assets/alunosbg.svg';
import AlunoImg from './../../assets/aluno.svg';
import api from './../../services/api';
import './style.css';

export default class New extends Component {
    state = {
        name: '',
        serie: '',
        phone: '',
        email: '',
        responsavel: '',
        series: [],
        serie_id: '',
    };

    componentWillMount(){
        api.get('/serie').then(response => {
            this.setState({series: response.data});
        });
    }

    handleOnChange = e => {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value 
        });
    };

    handleSubmit = async(e) => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            responsavel: this.state.responsavel,
            serie_id: this.state.serie_id
        }

        try {
            await api.post('/alunos', data);
            alert('Aluno Cadastrado com sucesso!');
            
        } catch(err){
            alert('Aluno não cadastrado');
        }


    }


    render(){
        
        return (
            <div className="home">
                <div className="container">
                    <header>
                        <div className="row">
                            <h2>Seja Bem Vindo, <strong>Diego Paiva</strong></h2>
                            <Link className="aluno-img" to="aluno"><img src={AlunoImg} alt="Aluno" /></Link>
                            <div className="icon">
                                <FiLogOut size={25} style={{margin: "7 auto", display: "block"}} color="#fff"/>
                            </div>
                        </div>
                    </header>
                    <div className="section-new">
                        <img src={alunosbg} alt="alunos" />
                        <div className="form-card">
                            <h1>Cadastrar Aluno</h1>
                            <form onSubmit={this.handleSubmit}>
                                <input name="name" value={this.state.name} onChange={this.handleOnChange} type="text" placeholder="Nome Completo" />
                                <div className="form-group">
                                        <select onChange={this.handleOnChange} name="serie_id" value={this.state.serie_id}>
                                            <option value="0">Selecione uma Série</option>
                                            {this.state.series.map(serie => (
                                                <option key={serie.id} value={serie.id}>{serie.serie}</option>
                                            ))}
                                        </select>
                                    <input name="phone" value={this.state.phone} onChange={this.handleOnChange} type="text" placeholder="Seu Telefone" />
                                </div>
                                <input name="email" value={this.state.email} onChange={this.handleOnChange} type="e-mail" placeholder="Email do aluno" />
                                <input name="responsavel" value={this.state.responsavel} onChange={this.handleOnChange} type="text" placeholder="Nome do responsável" />
                                <button type="submit">Cadastrar Aluno</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
