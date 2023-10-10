import React from 'react'
import "./Sidebar.css"
import Home from "../images/home.png"
import DailyTask from "../images/DailyTask.png"
import message from "../images/message.png"
import Salary from "../images/Salary.png"
import settings from "../images/settings.png"
import Teammembers from "../images/Teammembers.png"
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='mainSidebarContainer'>
      
        <ul className='ulcontainer'>
            
        <h4 className='menu'>Menu</h4>
            <li className=' liContainer'>
                <img src={`${Home}`} className='sidebarIcons'/>
                <Link to="/" style={{textDecoration:"none"}}>
                <p className='itemnames'>Home</p>
                </Link>
            </li>

            
            <li className=' liContainer'>
                <img src={DailyTask} className='dailytaskicon'/>
                <p className='itemnames'>DailyTask</p>
            </li>

            
            <li className=' liContainer'>
                <img src={message} className='message'/>
                <p className='itemnames'>Message</p>
            </li>

            <li className=' liContainer'>

             <img src={Salary} className='salary'/>
             <p className='itemnames'> Salaries</p>
               </li>


        <li className=' liContainer'>
               <img src={settings} className='settings'/>
              <p className='itemnames'>Settings</p>
                 </li>


               <li className=' liContainer'>
                <img src={settings} className='teammembers'/>
                <Link to="/teams" style={{textDecoration:"none"}}>
                <p className='itemnames'>Teammembers</p>
                </Link>
                </li>
                  </ul>

                  <div className='mainscheduledcontainer'>
                    <h4 className='scheduledheading'> Scheduled Events</h4>
                    <div className='scheduledcontainer'>
                      <input type="radio" value="happy birthday " />
                      <label htmlFor='happy Birthday'>Happy Birthday</label>
                    </div>
                    <div className='scheduledcontainer'>
                      <input type="radio" value="happy Anniversay " />
                      <label htmlFor='happy Anniversary'>Happy Anniversary</label>
                    </div>

                    <div className='scheduledcontainer'> 
                      <input type="radio" value="Bestie Wedding " />
                      <label htmlFor='happy Wedding'>Happy Wedding</label>
                    </div>
                  </div>

                   </div>
  )
}

export default Sidebar