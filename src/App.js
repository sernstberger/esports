import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";

import AlertBanner from "./components/shared/AlertBanner";

import { MuiThemeProvider } from 'material-ui/styles';
import defaultTheme from "./assets/styles/theme";


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={defaultTheme}>
        <Header />

        <AlertBanner />

        <Home />

        <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
