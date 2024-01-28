import React from 'react'
import InlineSVG from 'react-inlinesvg'
import logo from '../assets/images/svg/footer-logo.svg'

const Footer = () => {
  return (
    <footer className='bg-[#97978D]'>
      <div className="mx-auto px-4 py-8 sm:px-6 lg:px-10 container">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            {/* <span className='logo'>journallery</span> */}
            <InlineSVG src={logo} />
          </div>

          <p className="mt-4 text-center text-sm text-slate-50 lg:mt-0 lg:text-right">
            Copyright &copy; {new Date().getFullYear()} . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer