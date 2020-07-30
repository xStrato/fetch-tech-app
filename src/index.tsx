import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './Components/App';
import Header from './Components/Header';

ReactDOM.render(
  <React.StrictMode>

    <App.Header>
      <Header.Navbar/>
    </App.Header>
    
  </React.StrictMode>,
  document.getElementById('root')
);
