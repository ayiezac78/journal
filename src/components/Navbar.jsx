import React from 'react'
import { NavLink, Outlet, } from 'react-router-dom'
import { links } from '@/js/links'
import SVG from 'react-inlinesvg'


const dataLinks = links.map((link, index) => {
  return (
    <li key={index}>
      <NavLink className="navlinks text-sm flex items-center gap-1" to={link.path}>
        <SVG src={link.boxIconName} />
        {link.pathname}
      </NavLink>
    </li>
  );
});

const Navbar = () => {
  return (
    <nav className='hidden md:block'>
      <ul className='flex gap-3'>
        {dataLinks}
      </ul>
      <Outlet />
    </nav>
  )
}

export default Navbar