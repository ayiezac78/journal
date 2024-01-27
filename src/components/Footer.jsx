import React from 'react'
import InlineSVG from 'react-inlinesvg'
import logo from '../assets/images/svg/logo-no-background.svg'

const Footer = () => {
  return (
    <footer className='bg-slate-100'>
      <div class="mx-auto px-4 py-8 sm:px-6 lg:px-10 container">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="flex justify-center text-teal-600 sm:justify-start">
            {/* <span className='logo'>journallery</span> */}
            <InlineSVG src={logo} />
          </div>

          <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; {new Date().getFullYear()} . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer