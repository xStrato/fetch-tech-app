import React from 'react'
import HeaderController from './HeaderController'
import { IProps, IHeaderButton } from '../../Interfaces'

import '../../Styles/App.css'

export default class Header 
{
  static Navbar(props?: IProps<any>): JSX.Element
  {
    return (
      <div className="header-navbar">
        <Header.Button event={HeaderController.onClick} label="Smartphones" />
        <Header.Button event={HeaderController.onClick} label="Notebooks" />
        <Header.Button event={HeaderController.onClick} label="Tablets" />
      </div>
    )
  }

  static Button({label, event}: IHeaderButton): JSX.Element
  {
    return(
      <>
        <button className="header-navbar-button" onClick={event} >{label}</button>
      </>
    )
  }
}