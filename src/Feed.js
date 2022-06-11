import React from 'react'
import './Feed.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Post from './Post';
import Sidebar from './Sidebar';
function Feed() {
  return (
    <div className='feed'>
        <div className='feed_header'>
            <div className='left_menu'>
                <span>All Posts(32)</span>
                <span>Article</span>
                <span>Event</span>
                <span>Education</span>
                <span>Job</span>
            </div>
            <div className='right_menu'>
                <div className='box1'>
                    <span>Write a Post</span>
                    <ArrowDropDownIcon/>
                </div>
                <div className='box2'>
                    <img src='\Vector.png' alt=''/>
                    <span>Join Group</span>
                </div>
            </div>
        </div>
        <div className='feed_body'>
            <div className='post_body'>
            <Post
            image={"\Rectangle 5.png"}
            type={"\Article.png"}
            heading={'What is famous brands had regular fonts? Meet RegulaBrands!'}
            description={"I've worked in UX for the better part of a decade. From now on, I plan to rei..."}
            avatar={"\Rectangle3 (1).png"}
            name={'Sarthak Karma'}
            />
            <Post
            image={"\Rectangle 5 (1).png"}
            type={"\Education.png"}
            heading={'Text Benefits for Investment under National Pension Scheme launched by Government'}
            description={"I've worked in UX for the better part of a decade. From now on, I plan to rei..."}
            avatar={"\Rectangle 3 (2).png"}
            name={'Sarah West'}
            />
            <Post
            image={"\Rectangle 5 (2).png"}
            type={"\Meetup.png"}
            heading={'Finance & Investment Elite Social Mixer @Lujiazui'}
            description={"Fri,12 Oct,2016"}
            avatar={"\Rectangle 3 (3).png"}
            name={'Ronal Jones'}
            />
            </div>
            <Sidebar/>
        </div>
    </div>
  )
}

export default Feed