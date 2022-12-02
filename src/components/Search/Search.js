import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Search.scss'

export default function Search() {
    return (
        <div className='search'>
            <SearchIcon className='search__image'/>
            <input type={'text'} className='search__input' />
      </div>
  )
}
