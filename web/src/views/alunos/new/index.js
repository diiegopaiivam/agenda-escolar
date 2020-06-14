import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Row,
} from 'reactstrap';
import api from './../../../services/api';

export default class Aluno extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
          collapse: true,
          fadeIn: true,
          timeout: 300,
          series: [],
          serie_id: '',
          name: '',
          email: '',
          phone: '',
          responsavel: '',
          success: ''
        };
    }
    
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    
    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState }});
    }

    componentDidMount () {
        api.get('/serie').then(response => {
            this.setState({ series: response.data }); 
        });
    }

    handleSelectedSerie = e => {
        this.setState({serie_id: e.target.value});
    }

    handleOnChange = e => {
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value 
         });
    };

    handleCleanForm = () => {
        this.setState({
            ...this.state
        });
    }

    handleSubmit = async(e) => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            responsavel: this.state.responsavel,
            serie_id: this.state.serie_id
        };

        const response = await api.post('/alunos', data);    

        if(response){
            alert('Aluno Cadastrado com sucesso!');
        }
    };
    
    render(){
        return (
            <div className="animated fadeIn"> 
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                        <CardHeader>
                            <strong>Novo</strong> Aluno
                        </CardHeader>
                        <Form action='' method="post" onSubmit={this.handleSubmit} className="form-horizontal">
                        <CardBody>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="text-input">Nome Completo</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="text" id="name" name="name" placeholder="Nome do Aluno" onChange={this.handleOnChange} />
                                <FormText color="muted">Digite seu nome completo</FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="text-input">Telefone para contato</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="text" id="phone" name="phone" placeholder="Digite com DDD" onChange={this.handleOnChange} />
                                <FormText color="muted">Telefone</FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="email-input">Email do aluno</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="email" id="email" name="email" placeholder="Enter Email" autoComplete="email" onChange={this.handleOnChange}/>
                                <FormText className="help-block">Digite o email do aluno</FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="text-input">Responsável</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="text" id="responsavel" name="responsavel" placeholder="Nome do Responsável" onChange={this.handleOnChange} />
                                <FormText color="muted">Digite o nome do responsável</FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="select">Selecione sua série:</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="select" name="serie"  id="serie" value={this.state.serie_id} onChange={this.handleSelectedSerie} >
                                    {this.state.series.map(serieUnica => (
                                        <option key={serieUnica.id} value={serieUnica.id}>{serieUnica.serie}</option>
                                    ))}
                                </Input>
                                </Col>
                            </FormGroup>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Salvar</Button>
                            <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i><Link to="/alunos" style={{textDecoration:'none'}}>Cancelar</Link></Button>
                        </CardFooter>
                        </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}