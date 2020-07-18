import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';

export default () => (
    <Router>
        <Switch>
            <Route path="/contact/" component={Contact} />
            <Route path="/projects/" component={Projects} />
            <Route path="/" component={Home} />
        </Switch>
    </Router>
);
