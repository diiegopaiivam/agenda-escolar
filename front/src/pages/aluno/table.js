import React from 'react';
import { TableRow, TableBody, TableCell } from '@material-ui/core';
import { FiTrash, FiEdit } from 'react-icons/fi';

import './style.css';


const TableAluno = (props) => {
    if(props.tabela === 1){
        return (
            <div className="container-table">
                <TableBody style={{display: 'inline-table', width: '100%'}}>
                    {props.alunos.map(aluno => (
                        <TableRow key={aluno.id}>
                            <TableCell><input type="checkbox"/></TableCell>
                            <TableCell>{aluno.nome}</TableCell>
                            <TableCell>{aluno.email}</TableCell>
                            <TableCell>{aluno.phone}</TableCell>
                            <TableCell>{aluno.responsavel}</TableCell>
                            <TableCell>{aluno.serie}</TableCell>
                            <TableCell><FiEdit size={25} color="#4CB0E3" /> &nbsp; <FiTrash size={25} color="#4CB0E3" /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </div> 
        );
    }
}


export default TableAluno;