import React from 'react'
import AppController from './AppController'
import { IProps, IHeaderButton } from '../../Interfaces'

import '../../Styles/App.css'

export default class Header 
{
  static Navbar({setState}: {setState: React.Dispatch<React.SetStateAction<{}>>}): JSX.Element
  {
    const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      try 
      {
        const element: HTMLBaseElement = event.nativeEvent.target as HTMLBaseElement;
        const data = AppController.apiFetch(`https://ranekapi.origamid.dev/json/api/produto/${element.textContent?.slice(0, -1)}`, setState)

      } catch (error)
      {
        throw new Error(error)
      }
    }

    return (
      <div className="header-navbar">
        <Header.Button event={onClick} label="Smartphones" />
        <Header.Button event={onClick} label="Notebooks" />
        <Header.Button event={onClick} label="Tablets" />
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