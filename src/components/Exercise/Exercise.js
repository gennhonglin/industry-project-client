import React from 'react'
import './Exercise.scss'

export default function Exercise({text, onClick ,selected}) {
  return (
    <p className={`exercise9 ${selected ? 'exercise9__selected' : ''}`} onClick={onClick}>
          { text}
    </p>
  )
}
