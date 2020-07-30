import React from 'react'
import '../Styles/Header/Header.css'

export default class Header 
{
  static Navbar(props?: any): JSX.Element
  {
    return (
      <div className="navbar">
        <Header.Button label="Smartphones" />
        <Header.Button label="Notebooks" />
        <Header.Button label="Tables" />
      </div>
    )
  }

  static Button({label}:{label: string}): JSX.Element
  {
    return(
      <>
        <button className="navbar-button">{label}</button>
      </>
    )
  }
}

class Navbar
{
  static Button()
  {

  }
}