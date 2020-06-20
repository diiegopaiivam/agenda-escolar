import React from 'react';
import { FiLogOut, FiPlus, FiSearch, FiTrash, FiEdit } from 'react-icons/fi';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import AlunoImg from './../../assets/aluno.svg';

import './style.css';

const Aluno = () => {
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
                                <select>
                                    <option value="1">1ª Serie</option>
                                    <option value="2">2ª Serie</option>
                                    <option value="3">3ª Serie</option>
                                </select>
                                <input type="text" className="name" placeholder="Nome do Aluno" />
                                <input type="text" placeholder="Nome do Responsável" />
                            </div>
                            <div className="adicionais">
                                <button><FiPlus size={35} color="#4CB0E3" title="Cadastrar Aluno" /></button>
                                <button><FiSearch size={30} color="#4CB0E3" title="Pesquisar Aluno" /></button>
                            </div>
                        </div>
                    </form>
                    <div className="container-table">
                        <Table aria-label="sticky table">
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