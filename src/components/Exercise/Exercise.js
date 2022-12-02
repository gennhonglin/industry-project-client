import React from 'react'
import './Exercise.scss'

export default function Exercise({text, onClick ,selected}) {
  return (
    <p className={`exercise ${selected ? 'exercise__selected' : ''}`} onClick={onClick}>
          { text}
    </p>
  )
}
