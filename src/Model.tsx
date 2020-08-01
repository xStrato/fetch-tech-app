import React from 'react'

interface IProductPicture
{
  titulo: string
  src: string
}

export interface IProduct
{
  id: string
  nome: string
  preco: string
  descricao: string
  fotos: Array<IProductPicture>
}

export default class Model
{
  static Product(props?: any): JSX.Element
  {
    const {id, nome, preco, descricao, fotos} = props.dados as IProduct
  
    return (
      <div className='app-section'>
        <h1>{nome}</h1>
        <p>R$ {preco}</p>
        <p>{descricao}</p>
        <div className='app-section-img-wrapper'>
          {fotos?.map(el => <img key={el.titulo} src={el.src} alt={el.titulo} />)}
        </div>
      </div>
    )
  }
}
