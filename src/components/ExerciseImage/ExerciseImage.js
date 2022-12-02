import React from 'react'
import './ExerciseImage.scss'

export default function ExerciseImage({src, alt }) {
  return (
    <div className='div'>
      <p>{ alt}</p>
      <img className='exercise-image' src={src} alt={alt} />
    </div>
  )
}
