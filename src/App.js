import React from 'react';
import AppStyles from './App.styled.js';
import Header from './components/header';
import Footer from './components/footer';
import Routes from './routes';

function App() {
  return (
    <AppStyles className="App">
      <Header />
      <Routes />
      <Footer />
    </AppStyles>
  );
}

export default App;
