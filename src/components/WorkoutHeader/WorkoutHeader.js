import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './WorkoutHeader.scss'

export default function WorkoutHeader({text}) {
  return (
    <div className='header'>
      <KeyboardArrowLeftIcon className='header__arrow' />
      <p className='header__text'>{text}</p>
    </div>
  )
}
