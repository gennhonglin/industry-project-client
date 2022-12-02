import React from 'react'
import './ExerciseImage.scss'

export default function ExerciseImage({src, alt }) {
  return (
    <img className='exercise-image' src={src} alt={alt} />
  )
}
