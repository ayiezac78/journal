import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-10'>
      <Link className="navlinks text-sm" to="/">Home</Link>
      <Link className="navlinks text-sm" to="journal">Journal</Link>
      <Link className="navlinks text-sm" to="gallery">Gallery</Link>
      <Link className="navlinks text-sm" to="about">About</Link>
    </div>
  )
}

export default Navbar