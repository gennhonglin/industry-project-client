import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Search.scss'

export default function Search({filter}) {
    return (
        <div className='search'>
            <SearchIcon className='search__image'/>
            <input type={'text'} className='search__input' onChange={(e) => filter(e.target.value)}/>
      </div>
  )
}
