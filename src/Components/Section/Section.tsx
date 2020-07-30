import React from 'react'
import { ICard, IProps } from '../../Interfaces'
import '../../Styles/App.css'

export default class Section
{
  static Card({id, name, price, description, pictures}: ICard): JSX.Element
  {
    return (
      <>
      Section party
      {price}
      {name}
      </>
    )
  }
}
