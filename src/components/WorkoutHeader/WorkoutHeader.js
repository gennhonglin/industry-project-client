import React from 'react'
import { useNavigate } from 'react-router-dom'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './WorkoutHeader.scss'

export default function WorkoutHeader({ text }) {
  const navigate = useNavigate()
  return (
    <div className='header'>
      <KeyboardArrowLeftIcon className='header__arrow' onClick={ () => navigate(-1)} />
      <p className='header__text'>{text}</p>
    </div>
  )
}
