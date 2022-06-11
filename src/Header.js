import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <div className='header'>
      
            <img src='\whole.png' alt=''/>
      
        <div className='header_middle'>
            <SearchIcon/>
            <input placeholder='Search for your favourite groups in ATG' type="text"/>
        </div>
        <div className='header_right'>
            <span>Create account. </span>
            <span>It's free!</span>
            <ArrowDropDownIcon/>
        </div>
    </div>
  )
}

export default Header