import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LayoutPage = ({ children }) => {
  const [layoutTitle, setLayoutTitle] = useState('All Films')
  return (
    <div>
      <h1>{layoutTitle}</h1>
      <Link to="/allfilms">
        <button
          type="button"
          onClick={() => {
            setLayoutTitle('All Films')
          }}>
          All Films
        </button>
      </Link>
      <Link to="/favouritefilms">
        <button
          type="button"
          onClick={() => {
            setLayoutTitle('Favourite films')
          }}>
          Favourite films
        </button>
      </Link>
      {children}
    </div>
  )
}

export default LayoutPage
