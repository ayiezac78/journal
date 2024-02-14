import React from 'react'
import { useParams, Outlet } from 'react-router-dom'



const Posts = () => {
  const { slug } = useParams();
  return (
    <>
      <h1 className='py-10 text-4xl'>Posts</h1>
      <p>Content for slug: {slug}</p>
      <Outlet />
    </>
  )
}

export default Posts