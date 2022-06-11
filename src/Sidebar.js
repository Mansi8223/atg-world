import React from 'react'
import './Sidebar.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Button } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar_input'>
            <LocationOnOutlinedIcon/>
            <input placeholder='Enter your location' type="text"/>
            < CloseIcon/>
        </div>
        <div className='sidebar_notice'>
            <ErrorOutlineIcon/>
            <span>Your location will help us serve better and extend a personalised experience.</span>
        </div>
        <div className='sidebar_groups'>
            <div className='group_heading'>
                <ThumbUpOutlinedIcon/>
                <span>RECOMMENDED GROUPS</span>
            </div>
            <div className='groups'>
                <div>
                    <img src='\Rectangle 6.png' alt=''/>
                    <span>Leisure</span>
                    <Button>Followed</Button>
                </div>
                <div>
                    <img src='\Rectangle 6 (1).png' alt=''/>
                    <span>Activism</span>
                    <Button>Follow</Button>
                </div>
                <div>
                    <img src='\Rectangle 6 (2).png' alt=''/>
                    <span>MBA</span>
                    <Button>Follow</Button>
                </div>
                <div>
                    <img src='\Rectangle 6 (3).png' alt=''/>
                    <span>Philosophy</span>
                    <Button>Follow</Button>
                </div>
            </div>
            <div className='more'>
                See More...
            </div>
        </div>
    </div>
  )
}

export default Sidebar