import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import AppStyles from './App.styled.js';
import GlobalStyles from './Global.styled.js';
import Header from './components/header';
import Footer from './components/footer';
import Routes from './routes';
import theme from './theme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppStyles className="App">
          <Header />
          <section className="content">
            <Routes />
            <Footer />
          </section>
        </AppStyles>
      </ThemeProvider>
    </Router>
  );
}

export default App;
