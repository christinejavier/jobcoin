import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, Sans-Serif;
  }
  h1 {
    text-align: center;
  }
  section {
    text-align: center;
    border: 1px rgb(0, 0, 0) solid;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
