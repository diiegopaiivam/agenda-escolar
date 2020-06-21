import React, { useEffect, useState } from 'react';
import { FiLogOut, FiPlus, FiSearch, FiTrash, FiEdit } from 'react-icons/fi';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import AlunoImg from './../../assets/aluno.svg';

import api from './../../services/api';

import './style.css';

const Aluno = () => {

    const [series, setSeries ] = useState([]);
    const [name, setName] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [alunos, setAlunos] = useState([]);
    const [serie_id, setSerieID] = useState();
    
    useEffect(() => {
        api.get('/serie').then(response => {
            setSeries(response.data);
        })
    },[]);

    async function handleSubmit(){
        api.get(`/series?serie_id=${serie_id}&responsavel=${responsavel}&name=${name}&page=1`).then(response => {
            setAlunos(response.data);
        });
        
    }

    function handleOnChange(e) {
        e.target.name = e.target.value;
        setName(e.target.name);
    };

    function handleOnChangeResponsavel(e){
        e.target.name = e.target.value;
        setResponsavel(e.target.name);
    }

    function handleSelectSerie(e){
        setSerieID(e.target.value);
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
                <section>
                    <div className="title">Alunos</div>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group">
                                <select onChange={handleSelectSerie} value={serie_id}>
                                    <option value="0">Selecione uma Série</option>
                                    {series.map(serie => (
                                        <option key={serie.id} value={serie.id}>{serie.serie}</option>
                                    ))}
                                </select>
                                <input type="text" onChange={handleOnChange} name="name" value={name} className="name" placeholder="Nome do Aluno" />
                                <input type="text" onChange={handleOnChangeResponsavel} name="responsavel" value={responsavel} placeholder="Nome do Responsável" />
                            </div>
                            <div className="adicionais">
                                <button><FiPlus size={35} color="#4CB0E3" title="Cadastrar Aluno" /></button>
                                <button type="submit"><FiSearch size={30} color="#4CB0E3" title="Pesquisar Aluno" /></button>
                            </div>
                        </div>
                    </form>
                    <div className="container-table">
                        <Table width="90%" aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Aluno</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Telefone</TableCell>
                                    <TableCell>Responsavel</TableCell>
                                    <TableCell>Ações</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell><input type="checkbox"/></TableCell>
                                    <TableCell>José Diego Paiva Menezes</TableCell>
                                    <TableCell>diiegopaiivam@gmail.com</TableCell>
                                    <TableCell>(85) 992777480</TableCell>
                                    <TableCell>Maria Lucineide Batista de Paiva</TableCell>
                                    <TableCell><FiEdit size={25} color="#4CB0E3" /> &nbsp; <FiTrash size={25} color="#4CB0E3" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><input type="checkbox"/></TableCell>
                                    <TableCell>José Diego Paiva Menezes</TableCell>
                                    <TableCell>diiegopaiivam@gmail.com</TableCell>
                                    <TableCell>(85) 992777480</TableCell>
                                    <TableCell>Maria Lucineide Batista de Paiva</TableCell>
                                    <TableCell><FiEdit size={25} color="#4CB0E3" /> &nbsp; <FiTrash size={25} color="#4CB0E3" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><input type="checkbox"/></TableCell>
                                    <TableCell>José Diego Paiva Menezes</TableCell>
                                    <TableCell>diiegopaiivam@gmail.com</TableCell>
                                    <TableCell>(85) 992777480</TableCell>
                                    <TableCell>Maria Lucineide Batista de Paiva</TableCell>
                                    <TableCell><FiEdit size={25} color="#4CB0E3" /> &nbsp; <FiTrash size={25} color="#4CB0E3" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><input type="checkbox"/></TableCell>
                                    <TableCell>José Diego Paiva Menezes</TableCell>
                                    <TableCell>diiegopaiivam@gmail.com</TableCell>
                                    <TableCell>(85) 992777480</TableCell>
                                    <TableCell>Maria Lucineide Batista de Paiva</TableCell>
                                    <TableCell><FiEdit size={25} color="#4CB0E3" /> &nbsp; <FiTrash size={25} color="#4CB0E3" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><input type="checkbox"/></TableCell>
                                    <TableCell>José Diego Paiva Menezes</TableCell>
                                    <TableCell>diiegopaiivam@gmail.com</TableCell>
                                    <TableCell>(85) 992777480</TableCell>
                                    <TableCell>Maria Lucineide Batista de Paiva</TableCell>
                                    <TableCell><FiEdit size={25} color="#4CB0E3" /> &nbsp; <FiTrash size={25} color="#4CB0E3" /></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Aluno;