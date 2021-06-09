// DO NOT DELETE

import * as React from 'react'
import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <>
      <Header title="Dog あぷり" />
      <Description />
      <div className="line"></div>
      <DogListContainer />
    </>
  )
};