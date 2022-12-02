import React from 'react'
import { useNavigate } from 'react-router-dom'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './WorkoutHeader.scss'
import settings from "../../assets/icons/settings_White.png";

export default function WorkoutHeader({ text }) {
  const navigate = useNavigate()
  return (
    <div className='header'>
      <KeyboardArrowLeftIcon className='header__arrow' onClick={() => navigate(-1)} />
        <img alt="settings-icon" className="header__container__profile-icon" src={settings} />
      <p className='header__text'>{text}</p>
    </div>
  )
}
