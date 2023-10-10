import React from 'react'
import "./Navbar.css"
import Notification from "../images/notification.png"
import Search from "../images/searchicon.png"
import Profile from "../images/boy.jpg"

const Navbar = () => {
  return (
    <div className='mainNavbarContainer'>
      <div className='dashboardContainer'>
        <h1 className='dashtext'>Dashboard </h1> 
        </div>
      
      <div className='searchitemContainer'>
        <img src={Search}  className='searchicon'/>
        <input type="search" src="" alt="" placeholder='Search ' className='searchinput'/>
         </div>
      
      <div className='profileitemContainer'>
        <div>
        <img src={Notification} className='notificationicon'/>
        </div> 
        <div className='profileItems'>
                 <img src={Profile} className='profileicon'/>
        <p className='profilename'>Some Name</p>
        </div>
 
         </div>
    </div>
  )
}

export default Navbar