import React, { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState([])

  //生成時に実行
  useEffect(() => { // 確認！
    async function getBreedsList() {
      const result = await fetch('https://dog.ceo/api/breeds/list/all')
      var breeds_list = await result.json()
      breeds_list = Object.keys(breeds_list.message)
      setBreeds(breeds_list)
    }
    getBreedsList()
  }, [setBreeds])

  //関数
  const showImgList = async showSelect => {
    const result = await fetch(
      'https://dog.ceo/api/breed/' + showSelect + '/images/random/12',
    )
    var img_list = await result.json()
    img_list = img_list.message
    setSelectedBreed(img_list)
  }

  const ImgList = () => {
    const items = selectedBreed
    const pictures = Object.keys(items).map(url => (
      <img className="doglist-img" src={items[url]} key={items[url]}/>
    ))
    return <div className="doglist-container">{pictures}</div>
  }

  return (
    <div className="breeds">
      <BreedsSelect breeds={breeds} callShowImgList={showImgList} />
      <ImgList />
    </div>
  )
}