import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppStyles from './App.styled.js';
import Header from './components/header';
import Footer from './components/footer';
import Routes from './routes';

function App() {
  return (
    <Router>
      <AppStyles className="App">
        <Header />
        <Routes />
        <Footer />
      </AppStyles>
    </Router>
  );
}

export default App;
