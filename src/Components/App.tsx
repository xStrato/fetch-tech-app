import React from 'react';
import '../Styles/App.css'
import { ICard, IProps } from '../Interfaces'
import Header from './Header/Header';

export default class App
{
  static data: any
  static SetData: any
  //Responsible only for rendering the children
  static Container(): JSX.Element
  {
    [App.data, App.SetData] = React.useState({})
    console.log(App.data);
    return (
      <div className="app-container">

        <App.Header title ={"tech-fetch-versus"} />
        <App.Section />
        <App.Footer />

      </div>
    )
  }

  static Header({title}:{title: string}): JSX.Element
  {
    return (
      <div className="app-header">

        {title}
        <Header.Navbar />

      </div>
    )
  }

  static Section(props?: any): JSX.Element {

    const cardProps: ICard = {
      id: "200000",
      name: "Lammar Hammer",
      price: 2000,
      description: "description",
      pictures: [{title: "pictures", src: "http://www.google.com"}]
    } 

    return (
      <div className="app-section">
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