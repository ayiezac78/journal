import React from 'react'
import { Link } from 'react-router-dom'
import { links } from '@/js/links'

const dataLinks = links.map((link, index) => {
  return (
    <li key={index} className='flex items-center gap-1'>
      <box-icon color='#554B3F' name={link.boxIconName}></box-icon>
      <Link className="navlinks text-sm" to={link.path}>{link.pathname}</Link>
    </li>
  );
});

const Navbar = () => {
  return (
    <div className='hidden md:block'>
      <ul className='flex gap-3'>
        {dataLinks}
      </ul>
    </div>
  )
}

export default Navbar