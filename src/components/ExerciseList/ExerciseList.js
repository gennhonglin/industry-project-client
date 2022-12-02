import React, { useState } from 'react'
import Exercise from '../Exercise/Exercise'
import './ExerciseList.scss'

export default function ExerciseList({ filter, searchParams }) {
  const [filters, setFilters] = useState(searchParams)
  
  return (
    <div className='exercise-list'>
      <Exercise text={'Arms'} onClick={() => handleArmsFilter()} selected={filters.arms} />
        <Exercise text={'Back'}  onClick={() => handleBackFilter()} selected={filters.back}/>
        <Exercise text={'Chest'}  onClick={() => handleChestFilter()} selected={filters.chest}/>
        <Exercise text={'Abs'}  onClick={() => handleAbsFilter()} selected={filters.abs}/>
        <Exercise text={'Shoulders'}  onClick={() => handleShouldersFilter()} selected={filters.shoulders}/>
    </div>
  )

  function handleArmsFilter() {
    const newFilters = { ...filters, arms: !filters.arms }
    setFilters(newFilters)
    filter( newFilters)
  }

  function handleBackFilter() {
    console.log("back")
    const newFilters = { ...filters, back: !filters.back }
    setFilters(newFilters)
    filter(newFilters)
  }

  function handleChestFilter() {
    const newFilters = { ...filters, chest: !filters.chest }
    setFilters(newFilters)
    filter(newFilters)
  }

  function handleAbsFilter() {
    const newFilters = { ...filters, abs: !filters.abs }
    setFilters(newFilters)
    filter(newFilters)
  }

  function handleShouldersFilter() {
    const newFilters = { ...filters, shoulders: !filters.shoulders }
    setFilters(newFilters)
    filter(newFilters)
  }
}
