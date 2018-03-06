import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";

import AlertBanner from "./components/shared/AlertBanner";

import { MuiThemeProvider } from 'material-ui/styles';
import defaultTheme from "./assets/styles/theme";

import { Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={defaultTheme}>
          <Header />
          <AlertBanner />

          <Route exact path="/" component={ Home } />
          <Route path="/foo" component={ AlertBanner } />

          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
