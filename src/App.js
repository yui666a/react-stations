// DO NOT DELETE

import * as React from 'react'
import { useState } from 'react'
import { Header } from './Header'
import { Description } from './Description'
import { DogImage } from './DogImage'
import { DogListContainer } from './DogListContainer'
import { BreedsSelect } from './BreedsSelect'
import './App.css'


/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')
  const [error, setError] = useState(null)
  const [breed, setBreed] = useState(0)

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
        {/* <Header /> */}
        <Header title="Dog あぷり" />
        <div className="main">
          <Description />
          <div className="picture">
            <DogImage url={ dogUrl }/><br/>
                {/* <img className="dogPicture" src={ dogUrl } alt="picture of gog" /><br/> */}
            <button className="button" onClick={Reload}>画像を変更</button>
            {/* <button className="button" onClick={() => Reload()}>画像を変更</button> */}
          </div>
        </div>
        <div className="line"></div>
        <DogListContainer />
        {/* <BreedsSelect/> */}
    </div>
    )
  }
};