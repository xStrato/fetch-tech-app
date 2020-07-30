import React from 'react'
import AppController from './AppController'
import { IProps, IHeaderButton } from '../../Interfaces'

import '../../Styles/App.css'

export default class Header 
{
  static Navbar(props: IProps<any>): JSX.Element
  {
    return (
      <div className="header-navbar">
        <Header.Button event={AppController.onClick} label="Smartphones" />
        <Header.Button event={AppController.onClick} label="Notebooks" />
        <Header.Button event={AppController.onClick} label="Tablets" />
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