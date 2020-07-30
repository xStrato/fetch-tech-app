import React from 'react'

export default class AppController {
  static onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    try 
    {
      const element: HTMLBaseElement = event.nativeEvent.target as HTMLBaseElement;
      // AppController.apiFetch(`https://ranekapi.origamid.dev/json/api/produto/${element.textContent?.slice(0, -1)}`)

    } catch (error)
    {
      throw new Error(error)
    }
  }

  static async apiFetch(url: string, setState: React.Dispatch<React.SetStateAction<{}>>): Promise<void> {
    try
    {
      const responde = await fetch(url)
      const json = await responde.json()
      
      setState(json);

    } catch (error)
    {
      throw new Error(error.message)
    }
  }
}