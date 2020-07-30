import React from 'react'

export default class HeaderController {

  static onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    try 
    {
      const element: HTMLBaseElement = event.nativeEvent.target as HTMLBaseElement;
      HeaderController.apiFetch(`https://ranekapi.origamid.dev/json/api/produto/${element.textContent?.slice(0, -1)}`)

    } catch (error)
    {
      throw new Error(error)
    }
  }

  static async apiFetch(url: string): Promise<void> {
    try
    {
      const responde = await fetch(url)
      const data = await responde.json()

      console.log(data);
    } catch (error)
    {
      throw new Error(error.message)
    }
  }
}