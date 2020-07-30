import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';

import App from './Components/App';
import Header from './Components/Header/Header';
import Section from './Components/Section/Section'

ReactDOM.render(
  <React.StrictMode>

    <App.Container />
    
  </React.StrictMode>,
  document.getElementById('root')
);
const obj = {id:"", name:"", price:200, description:"", pictures:[]}
