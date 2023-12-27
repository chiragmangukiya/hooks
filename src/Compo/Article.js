import React, { useContext } from 'react'
import { nameContext } from '../App'

function Article() {

  const test = useContext(nameContext)
  return (
    <>
          <h1>Article Page</h1>
          <p>{test}</p>

    </>
  )
}

export default Article