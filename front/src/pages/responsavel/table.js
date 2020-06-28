import React from 'react';
import { Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';
import { FiTrash, FiEdit } from 'react-icons/fi';

import './style.css';


const TableResponsavel = (props) => {
    console.log(props.selecao_alunos)
    return (
        <div className="container-table">
            <p>Selecione os Responsável que deseja enviar os comunicados.</p>
            <Table width="90%" aria-label="sticky table">
                <TableHead align="center">
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
                <TableBody align="center">
                    {props.alunos.map(aluno => (
                        <TableRow key={aluno.id}>
                            <TableCell><input type="checkbox" value={props.marked} onChange={props.handleCheckbox} name={aluno.email}/></TableCell>
                            <TableCell>{aluno.nome}</TableCell>
                            <TableCell>{aluno.email}</TableCell>
                            <TableCell>{aluno.phone}</TableCell>
                            <TableCell>{aluno.responsavel}</TableCell>
                            <TableCell>{aluno.serie}</TableCell>
                            <TableCell><FiEdit size={25} color="#4CB0E3" /> &nbsp; <FiTrash size={25} color="#4CB0E3" /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div> 
    );
}


export default TableResponsavel;