// // DO NOT DELETE
// import { useState, useEffect } from 'react'



// export const DogListContainer = props => {
//     const [breeds, setBreeds] = useState('')

//     useEffect(() => {
//         fetch('https://dog.ceo/api/breeds/image/random')
//             .then(res => res.json())
//             .then(
//                 result => {
//                     setDogUrl(result.message)
//                 },
//                 err => {
//                     setError(err)
//                 },
//             );
//     });
//     return (<br></br>);
// }

import React, { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = props => {
    const [breeds, setBreeds] = useState(0)
    const [selectedBreed, setSelectedBreed] = useState([])

    useEffect(() => {
        async function getBreedsList() {
            const result = await fetch('https://dog.ceo/api/breeds/list/all')
            var breeds_list = await result.json()
            console.log(breeds_list)
            breeds_list = Object.keys(breeds_list.message)
            setBreeds(breeds_list)
            // fetch('https://dog.ceo/api/breeds/list/all')
            //     .then(res => res.json())
            //     .then(
            //         result => {
            //             console.log(result);
            //             setBreeds(result.message);
            //         },
            //         err => {
            //             console.log(err);
            //         },
            //     )
        }
        getBreedsList()
    }, [])
    console.log('Hello2')
    console.log(breeds)
    // return <BreedsSelect breeds={breeds} />


    const showImgList = async showSelect => {
        // console.log('fetch ' + showSelect)
        const result = await fetch(
          'https://dog.ceo/api/breed/' + showSelect + '/images/random/9',
        )
        var img_list = await result.json()
        img_list = img_list.message
        setSelectedBreed(img_list)
      }
    
      const ImgList = () => {
        const items = selectedBreed
        const img = Object.keys(items).map(item => (
          <img className="doglist-img" src={items[item]} />
        ))
        return <div className="doglist-container">{img}</div>
      }
    
      return (
        <>
          <BreedsSelect breeds={breeds} callShowImgList={showImgList} />
          <ImgList />
        </>
      )
}