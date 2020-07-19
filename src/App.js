import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Helmet from 'react-helmet';
import AppStyles from './App.styled.js';
import Header from './components/header';
import Footer from './components/footer';
import Routes from './routes';
import useRdsData from './hooks/useRdsData';

const App = () => {
  const rdsData = useRdsData();

  if(rdsData) {
    console.log(rdsData);
  }

  return (
    <Router>
      <Helmet>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <AppStyles className="App">
        <Header />
        <Routes />
        <Footer />
      </AppStyles>
    </Router>
  );
};

export default App;
