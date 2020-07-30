import React from 'react';
import '../Styles/App.css'
import { ICard, IProps } from '../Interfaces'
import Header from './Header/Header';
import Section from './Section/Section';

export default class App
{
  static Container(): JSX.Element
  {
    const [data, setData] = React.useState({})

    const navbar: JSX.Element = <Header.Navbar setState={setData}/>
    return (
      <div className="app-container">

        <App.Header title ={"tech-fetch-versus"} navbar={navbar}/>
        <App.Section data={data as ICard} />
        <App.Footer />

      </div>
    )
  }

  static Header({title, navbar}:{title: string, navbar: JSX.Element}): JSX.Element
  {
    return (
      <div className="app-header">
        {title}
        {navbar}
      </div>
    )
  }

  static Section({data}:{data: ICard}): JSX.Element {

    return (
      <div className="app-section">
        {data.id ? <Section.Card {...data}/> : "There's any result"}
      </div>
    )
  }

  static Footer(props?: any): JSX.Element {
    return (
      <div>
      </div>
    )
  }
}