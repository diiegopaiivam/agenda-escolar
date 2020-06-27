import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home/index';
import Aluno from './pages/aluno/index';
import Responsavel from './pages/responsavel/index';
import Comunicado from './pages/comunicado/index';
import New from './pages/aluno/new';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/aluno" component={Aluno} />
                <Route path="/responsavel" component={Responsavel} />
                <Route path="/comunicado" component={Comunicado} />
                <Route path='/new' component={New} />
            </Switch>
        </BrowserRouter>
    );
}

