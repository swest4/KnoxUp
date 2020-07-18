import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';

export default () => (
    <Router>
        <Switch>
            <Route path="/contact/"><Contact /></Route>
            <Route path="/projects/"><Projects /></Route>
            <Route path="/"><Home /></Route>
        </Switch>
    </Router>
);
