import React from 'react'
import Exercise from '../Exercise/Exercise'
import './ExerciseList.scss'

export default function ExerciseList() {
  return (
    <div className='exercise-list'>
          <Exercise text={'Arms'} />
          <Exercise text={'Back'} />
          <Exercise text={'Chest'} />
          <Exercise text={'Abs'} />
          <Exercise text={'Shoulders'} />
    </div>
  )
}
