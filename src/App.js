// DO NOT DELETE

import * as React from 'react'
import { useState } from 'react'
import './App.css'


/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')
  const [error, setError] = useState(null)

  const Reload = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(
        result => {
          setDogUrl(result.message)
        },
        err => {
          setError(err)
        },
      )
  }

  if (error) {
    return <div>Error: {error.message}</div>
  } else {
    return (
      <div>
        <header>
          <h1>Dogアプリ</h1>
        </header>

        <div className="main">
          <div className="description">
            <p>犬の画像を表示</p>
          </div>
            <div className="picture">
                <img className="dogPicture" src={ dogUrl } alt="picture of gog" /><br/>
                <button className="button" onClick={() => Reload()}>画像変更</button>
            </div>
        </div>
        <div className="line"></div>
    </div>
    )
  }
};