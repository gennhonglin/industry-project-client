import React from 'react'
import ExerciseImage from '../ExerciseImage/ExerciseImage'
import './ExerciseImageGrid.scss'

export default function ExerciseImageGrid({data}) {
    
  return (
    <div className='grid'>
          {data.map(exercise => {
             return <ExerciseImage key={exercise.id} src={exercise.image} alt={exercise.name} />
     })}
    </div>
  )
}
