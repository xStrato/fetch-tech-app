import React from 'react';
import '../Styles/App.css'
import { ICard, IProps } from '../Interfaces'
import { inspect } from 'util';

// const [ativo, setAtivo] = React.useState(0)

export default class App
{
  //Responsible only for rendering the children
  static Container(props?: any): JSX.Element
  {
    return (
      <div className="app-container">
      </div>
    )
  }

  static Header(props?: any): JSX.Element
  {
    return (
      <div className="app-header">
        <h1>Tech Fetch Versus</h1>
      </div>
    )
  }

  static Section({children: {type: Card}}: IProps<JSX.Element>): JSX.Element {

    const [data, setData] = React.useState(0)

    const cardProps: ICard = {
      id: "200000",
      name: "Lammar Hammer",
      price: 2000,
      description: "description",
      pictures: [{title: "pictures", src: "http://www.google.com"}]
    } 

    return (
      <div className="app-section">
        <Card card={cardProps} />
      </div>
    )
  }

  static Footer(props: any): JSX.Element {
    return (
      <div>Tsste</div>
    )
  }
}