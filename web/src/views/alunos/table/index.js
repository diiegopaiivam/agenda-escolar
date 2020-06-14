import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import api from './../../../services/api';
import './style.css';

export default class TableAlunos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alunos: []
        };
    }

    componentDidMount () {
        api.get('/alunos').then(response => {
            this.setState({ alunos: response.data }); 
        });
    }

    render(){
        return(
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                        <CardHeader>
                            <Row>
                                <i className="fa fa-align-justify"></i> Alunos Matrículados
                                <Link className="button-references" style={{textDecoration:'none'}} to="/alunos/new"><span>Cadastrar novo Aluno!</span></Link>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Table hover bordered striped responsive size="sm">
                            <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Responsável</th>
                                <th>E-mail</th>
                                <th>Telefone</th>
                                <th>Série</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.state.alunos.map(aluno => (
                                    <tr key={aluno.id}>
                                        <td>{aluno.name}</td>
                                        <td>{aluno.responsavel}</td>
                                        <td>{aluno.email}</td>
                                        <td>{aluno.phone}</td>
                                        <td>{aluno.serie}</td>
                                    </tr>
                                ))}
                            </tbody>
                            </Table>
                            <nav>
                            <Pagination>
                                <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                                <PaginationItem active>
                                <PaginationLink tag="button">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                                <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                            </Pagination>
                            </nav>
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}