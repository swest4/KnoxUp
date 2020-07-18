import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

export default () => (
    <Router>
        <Switch>
            <Route path="/contact"><h1>Contact</h1></Route>
            <Route path="/projects"><h1>Projects</h1></Route>
            <Route path="/"><h1>Home</h1></Route>
        </Switch>
    </Router>
)