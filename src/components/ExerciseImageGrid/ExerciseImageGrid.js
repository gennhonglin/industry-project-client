import React from 'react'
import ExerciseImage from '../ExerciseImage/ExerciseImage'
import './ExerciseImageGrid.scss'

export default function ExerciseImageGrid() {
  return (
    <div className='grid'>
      <ExerciseImage />
      <ExerciseImage />
      <ExerciseImage />
      <ExerciseImage />
      <ExerciseImage />
      <ExerciseImage />
    </div>
  )
}
