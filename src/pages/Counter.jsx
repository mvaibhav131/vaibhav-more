import React from 'react'
import { useParams } from 'react-router-dom'

const Counter = () => {
    const parms=useParams();
  return (
    <h1>
      Counter:{parms.initialCount}
    </h1>
  )
}

export default Counter
