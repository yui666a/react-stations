// DO NOT DELETE
import * as React from 'react'
import { useState } from 'react'

export const BreedsSelect = props => {
    // fields
    const [select, setSelect] = useState('affenpinscher')
    const [showSelect, setShowSelect] = useState('affenpinscher')
    const breeds = Array.from(props.breeds) //配列を保存 (なぜ必要か，よくわかってない)

    // functions
    const selectChange = selected => {
        setSelect(selected.target.value)
    }

    const showSelectChange = async () => {
        new Promise(
            resolve => setShowSelect(select) //成功
        )
        props.callShowImgList(select)
    }

    return (
        <div className="breeds-select">
            <label className="breeds-select-label">犬種リスト</label>
            {/* 犬種1つ1つに対してkeyと表示名を設定 */}
            <select className="breeds-select-dropdown" onChange={selectChange}>
                {breeds.map(breed => (
                    <option key={breed}>{breed}</option>
                ))}
            </select>

            {/* <button className="button" value={showSelect} onClick={() => showSelectChange()}>表示</button> */}
            <button className="button" value={showSelect} onClick={showSelectChange}>表示</button>
        </div>
  )
}