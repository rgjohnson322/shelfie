import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import components
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

export default (

    <Switch>
        <Route path="/edit" component={Form} />
        <Route path="/edit/:id" component={Form} />
        <Route exact path="/" component={Dashboard} />
    </Switch>
    
)
