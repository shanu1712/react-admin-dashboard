import React from 'react'
import "../Teams/Teams.css"
import Sidebar from '../components/Sidebar'
import Teammembers from '../components/Teammembers'
const Teams = () => {
  return (
    <div className='teamcontainer'>
        <Sidebar/>
        <Teammembers/>

    </div>
  )
}

export default Teams