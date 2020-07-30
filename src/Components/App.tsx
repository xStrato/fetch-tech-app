import { stringify } from 'querystring';
import React from 'react';
import Header from './Header'
import '../Styles/Header/Header.css'

interface IProps
{
  [props: string]: number | string //| {pessoa: string, idade: number}
}

export default class App
{
  static Header(props: any): JSX.Element
  {
    const [ativo, setAtivo] = React.useState(0)

    return (
      <div className="header-main-div">
        <h1>Tech Fetch Versus</h1>
        {props.children}
      </div>
    )
  }

  static Footer(props?: any): JSX.Element {
    throw new Error('Method not implemented.');
  }
}