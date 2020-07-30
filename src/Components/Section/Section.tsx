import React from 'react'
import { ICard, IProps } from '../../Interfaces'
import '../../Styles/App.css'

export default class Section
{
  static Card(props?: any): JSX.Element
  {
    const {id, name, price, description, pictures}: ICard = props.card

    return (
      <>
      Cardddd
      </>
    )
  }
}
