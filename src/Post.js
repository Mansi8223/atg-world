import React from 'react'
import './Post.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShareIcon from '@mui/icons-material/Share';
function Post({image, type, heading, description, avatar, name}) {
  return (
    <div className='post'>
        <div className='feed_post'>
            <img src={image} alt=''/>
            <div className='post_container'>
                <img src={type} alt='' />
                <div className='post_heading'>
                    <span>{heading}</span>
                    <MoreHorizIcon/>
                </div>
                <div className='post_description'>{description}</div>
                <div className='post_detail'>
                    <div className='left_detail'>
                        <img src={avatar} alt=''/>
                        <span>{name}</span>
                    </div>
                    <div className='right_detail'>
                        <RemoveRedEyeOutlinedIcon/>
                        <span>1.4k views</span>
                        <div className='box'>
                            <ShareIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post