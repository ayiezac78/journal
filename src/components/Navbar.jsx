import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-col h-[50vh] justify-around'>
      <div>
        <Link className="navlinks text-sm" to="/">Home</Link>
      </div>
      <div>
        <Link className="navlinks text-sm" to="journal">Journal</Link>
      </div>
      <div>
        <Link className="navlinks text-sm" to="gallery">Gallery</Link>
      </div>
      <div>
        <Link className="navlinks text-sm" to="about">About</Link>
      </div>
    </div>
  )
}

export default Navbar