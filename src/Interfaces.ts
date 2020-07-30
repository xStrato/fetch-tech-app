export interface IProps<T>
{
  [props: string]: T
}

export interface ICardPicture
{
  title: string
  src: string
}

export interface ICard
{
  id: string
  name: string
  price: number
  description: string
  pictures: Array<ICardPicture>
}

export interface IHeaderButton
{
  label: string
  event: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

export interface IFetchResult
{
  
}

export interface ISectionProps
{
  children: JSX.Element
}