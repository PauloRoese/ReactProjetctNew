import React from 'react';
import { Route, Switch } from 'react-router-dom'
import DashBoard from '../DashBord/DashBoard';
import NotFaund from '../NotFound/NotFaund';
import './Content.css';
import Links from '../Links/Links';
import Analize from '../Analize/Analize';
import Portifolio from '../Portifolio/Portifolio';
import Desenvolvimento from '../Desenvolvimento/Desenvolvimento';
import Contato from '../Contato/Contato';


const Content = () => {
    return (
        <>
            <div className="d-flex container-fluid content">
                
                    <Switch>
                        <Route path='/' exact={true} component={DashBoard} />
                        <Route path='/home' exact={true} component={DashBoard} />
                        <Route path='/links' component={Links} />
                        <Route path='/analize' component={Analize} />
                        <Route path='/portifolio' component={Portifolio} />
                        <Route path='/desenvolvimento' component={Desenvolvimento} />
                        <Route path='/contato' component={Contato} />
                        <Route component={NotFaund} />
                    </Switch>
               
            </div>
        </>

    );
}

export default Content;