import React from 'react';
import "./App.css"
import Produt from './Produto';
import ReactLogo from './logo192.png'

export default class App
{
  static Main()
  {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    async function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void>
    {
      setLoading(true)
      const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${(event.target as HTMLElement).innerText}`)
      const json = await response.json()
      setData(json)
      setLoading(false)
    }
    
    return (
      <div className="app-container">
        <div className="app-header">
          <h1>Fetch Tech App
            <img id="react-logo-header" src={ReactLogo} alt=""/>
          </h1>
          <button className="header-navbar-button" onClick={handleClick}>Smartphone</button>
          <button className="header-navbar-button" onClick={handleClick}>Notebook</button>
          <button className="header-navbar-button" onClick={handleClick}>Tablet</button>
        </div>
        {loading && <p className="loading">Loading...</p>}
        {!loading && data && <Produt dados={data} />}
      </div>
    );
  }
}