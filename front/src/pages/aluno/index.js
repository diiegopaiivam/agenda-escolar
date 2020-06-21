import React, { Component } from 'react';
import { FiLogOut, FiPlus, FiSearch } from 'react-icons/fi';
import { Table, TableHead, TableRow, TableCell } from '@material-ui/core';

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
        tabela: ''
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
    
    verificaTable = () => {
        if(this.state.tabela === 1){
            return <TableAluno {...this.state}/>
        }
    }

    render(){
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
                                    <button><FiPlus size={35} color="#4CB0E3" title="Cadastrar Aluno" /></button>
                                    <button type="submit" onClick={this.handleSubmit}><FiSearch size={30} color="#4CB0E3" title="Pesquisar Aluno" /></button>
                                </div>
                            </div>
                        </form>
                        <Table width="90%" aria-label="sticky table">
                            <TableHead style={{display: 'inline-table', width: '100%'}}>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Aluno</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Telefone</TableCell>
                                    <TableCell>Responsavel</TableCell>
                                    <TableCell>Série</TableCell>
                                    <TableCell>Ações</TableCell>
                                </TableRow>
                            </TableHead>
                            {this.verificaTable()}
                        </Table>
                    </section>
                </div>
            </div>
        );
    }
}

    