import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Component/home';
import Portfolio from './Component/portfolio';
import Invoice from './Component/invoice';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/invoice" component={Invoice} />
            {/* Add other routes as needed */}
        </Switch>
    </Router>,
    document.getElementById('root')
);