import React from 'react'
import { Link, Outlet } from 'react-router-dom'



const Journal = () => {
  return (
    <>
      <h1 className='py-10 text-4xl'>Journal</h1>
      <ul>
        <li><Link to="/journal/how-to-inlove">How to In Love</Link></li>
        <li><Link to="/journal/how-to-make-decisions">How to Make Decisions</Link></li>
      </ul>
      <Outlet />
    </>
  )
}

export default Journal