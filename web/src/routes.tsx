import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import LoginPage from './pages/LoginPage';


function Routes(){
    return(
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Landing} exact/>
            <Route path="/app" component={OrphanagesMap}/>
            <Route path="/orphanages/create" component={CreateOrphanage}/>
            <Route path="/orphanages/:id" component={Orphanage}/>
            <Route path="/login" component={LoginPage}/>
          </Switch> 
        </BrowserRouter>
    )
};

export default Routes;