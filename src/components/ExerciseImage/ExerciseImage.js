import React from 'react';
import { Link } from 'react-router-dom';
import './ExerciseImage.scss';

export default function ExerciseImage({src, alt }) {
  return (
    <Link to={`/workout/bicep`} className='exercise-image'><img className='exercise-image-img' src={src} alt={alt} /></Link>
  )
}
