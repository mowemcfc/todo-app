import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css';
import App from "./App.js";
import { Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles/';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)