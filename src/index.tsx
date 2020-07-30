import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';

import App from './Components/App';
import Header from './Components/Header/Header';
import Section from './Components/Section/Section'

ReactDOM.render(
  <React.StrictMode>

    <App.Container

    header={<App.Header/>}
    section={<App.Section />}
    footer={<App.Footer />}
    
    />

    <App.Header navbar={<Header.Navbar />}/>
        

      <App.Section>
        <Section.Card />
      </App.Section>
  </React.StrictMode>,
  document.getElementById('root')
);
const obj = {id:"", name:"", price:200, description:"", pictures:[]}
