// DO NOT DELETE
import * as React from 'react'
import { useState } from 'react'
import { DogImage } from './DogImage'


export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')
  const [error, setError] = useState(null)

  const reload = () => {
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
      <div className="main">
        <div className="description">犬の画像を表示</div>
        <div className="detail">
          <DogImage url={dogUrl} /><br />
          <button className="button" onClick={reload}>画像を変更</button>
          {/* <button className="button" onClick={() => reload()}>画像を変更</button> */}
        </div>
      </div>
    );
  }
}