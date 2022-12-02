import React from 'react'
import './Exercise.scss'

export default function Exercise({text}) {
  return (
    <p className='exercise'>
          { text}
    </p>
  )
}
