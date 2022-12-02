import React, { useEffect, useState } from 'react'
import ExerciseList from '../../components/ExerciseList/ExerciseList'
import Search from '../../components/Search/Search'
import WorkoutHeader from '../../components/WorkoutHeader/WorkoutHeader'
import Title from '../../components/Title/Title'
import ExerciseImageGrid from '../../components/ExerciseImageGrid/ExerciseImageGrid'
import './WorkoutPage.scss'
import allData from '../../data/exercisesData'

export default function WorkoutPage() {
  const [filteredExercises, setFilteredExercises] = useState(allData)
  const [searchParams, setSearchParams] = useState({ arms: false, back: false, chest: false, abs: false, shoulders: false})

  useEffect(() => {
    setFilteredExercises(() => {
      return allData.filter(exercise => {
        if(Object.values(searchParams).every(value => value === false)) return exercise
        for (const [key, value] of Object.entries(searchParams)) {
          if(key === exercise.category && value) return exercise
        }
      })
    })
  }, [searchParams])
  return (
    <div className='workout-page'>
      <WorkoutHeader text={'explore exercises'} />
      <Search />
      <ExerciseList filter={setSearchParams} searchParams={searchParams} />
      <Title text='recommended for you' />
      <ExerciseImageGrid data={filteredExercises} />
    </div>
  )
}
