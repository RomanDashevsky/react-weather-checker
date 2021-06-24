import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from "react-router-dom"
import { faTemperatureLow, faCogs } from '@fortawesome/free-solid-svg-icons'

const navItems = [
  <Link to='/'><span className='w-10 inline-block'><FontAwesomeIcon icon={faTemperatureLow}/></span>Check the Weather</Link>,
  <Link to='/configs'><span className='w-10 inline-block'><FontAwesomeIcon icon={faCogs} /></span>App configs</Link>
]

const navList = navItems.map(item => (
  <li className='font-sans text-white flex flex-col md:flex-row py-1'>{ item }</li>
))

const Navigation = () => {
  return (
    <nav>
      <ul>
        {navList}
      </ul>
    </nav>
  )
}


export default Navigation
