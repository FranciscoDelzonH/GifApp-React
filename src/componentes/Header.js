import React from 'react'
import AddCategory from './AddCategory'

const Header = ({set}) => {
  return (
    <>
        <header>
        <h2>GifApp - Find your favorite Gifs</h2>
        <AddCategory set={set} />
        <hr/>
      </header> 
    </>
  )
}

export default Header