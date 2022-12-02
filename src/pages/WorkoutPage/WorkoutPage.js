import React from 'react'
import ExerciseList from '../../components/ExerciseList/ExerciseList'
import Search from '../../components/Search/Search'
import WorkoutHeader from '../../components/WorkoutHeader/WorkoutHeader'
import Title from '../../components/Title/Title'
import ExerciseImageGrid from '../../components/ExerciseImageGrid/ExerciseImageGrid'
import './WorkoutPage.scss'

export default function WorkoutPage() {
  return (
    <div className='workout-page'>
      <WorkoutHeader text={'explore exercises'} />
      <Search />
      <ExerciseList />
      <Title text='recommended for you' />
      <ExerciseImageGrid />
    </div>
  )
}
