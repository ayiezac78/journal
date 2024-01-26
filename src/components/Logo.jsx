import React from 'react'
import logoIcon from '../assets/images/svg/logo-no-background.svg'
import { UnLazyImage } from '@unlazy/react'

const Logo = () => {
  return (
    <div>
      <UnLazyImage src={logoIcon} alt="Logo" autoSizes width={60} height={60} />
    </div>
  )
}

export default Logo