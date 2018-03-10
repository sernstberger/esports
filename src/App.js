import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Post from "./pages/Post";

import { MuiThemeProvider } from 'material-ui/styles';
import defaultTheme from "./assets/styles/theme";

import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={defaultTheme}>
          <Header />

          <Route exact path="/" component={ Home } />
          <Route path="/teams" component={ Teams } />
          <Route path="/post" component={ Post } />

          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
