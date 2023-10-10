import React from 'react'
import Sidebar from '../components/Sidebar'
import HomeRightBar from '../components/HomeRightBar'
import "./Home.css"
const Home = () => {
  return (
    <div className='mainHomeContainer'> 
        <Sidebar/>
        <HomeRightBar/>
    </div>
  )
}

export default Home