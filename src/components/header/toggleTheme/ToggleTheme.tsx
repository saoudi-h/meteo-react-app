import React, { useEffect, useState } from 'react'
import { useTheme } from '../../../contexts/ThemeContext'
import './ToggleTheme.sass'
import SunSvg from '../../icons/SunSvg'
import MoonSvg from '../../icons/MoonSvg'
import { useSpring, animated } from '@react-spring/web'
import { classNames } from '../../../lib/classnames'

const ToggleTheme: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  const [springs, api] = useSpring(() => ({
    from: {
      width: '30px',
      borderRadius: theme !== 'dark' ? '15px 3px 3px 15px' : '3px 15px 15px 3px',
      left: theme !== 'dark' ? '3px' : '"42px"',
      right: theme !== 'dark' ? '39px' : '42px'
    },
    config: { mass: 4, tension: 400, friction: 70 }
  }))

  useEffect(() => {
    api.start({
      left: theme !== 'dark' ? '3px' : '42px',
      right: theme !== 'dark' ? '42px' : '3px'
    })
  }, [theme, api])

  const handleToggle = (e: React.MouseEvent) => {
    const currentButton = e.currentTarget.getAttribute('name')
    if (
      (currentButton === 'sun-left' && theme === 'light') ||
      (currentButton === 'moon-right' && theme === 'dark')
    )
      return

    const borderRadiusValue = theme === 'dark' ? '15px 3px 3px 15px' : '3px 15px 15px 3px'

    api.start({
      width: '30px',
      borderRadius: borderRadiusValue
    })
    toggleTheme()
  }

  const handleMouseOver = (e: React.MouseEvent) => {
    const currentButton = e.currentTarget.getAttribute('name')
    if (
      (currentButton === 'sun-left' && theme === 'light') ||
      (currentButton === 'moon-right' && theme === 'dark')
    )
      return

    if (!isHovered) {
      setIsHovered(true)
      if (theme === 'dark')
        api.start({
          width: '40px',
          left: '32px'
        })
      else
        api.start({
          width: '40px',
          right: '32px'
        })
    }
  }

  const handleMouseLeave = (e: React.MouseEvent) => {
    setIsHovered(false)
    if (theme === 'dark')
      api.start({
        width: '30px',
        left: '42px'
      })
    else
      api.start({
        width: '30px',
        right: '42px'
      })
  }

  return (
    <div className="toggle-theme">
      <animated.div className="toggle-theme__switch" style={{ ...springs }} />
      <button
        className={classNames('toggle-theme__svg-box', theme === 'light' ? 'selected' : 'active')}
        onMouseOver={handleMouseOver}
        onClick={handleToggle}
        onMouseLeave={handleMouseLeave}
        id="sun-left"
        name="sun-left"
      >
        <SunSvg />
      </button>
      <button
        className={classNames('toggle-theme__svg-box', theme === 'dark' ? 'selected' : 'active')}
        onMouseOver={handleMouseOver}
        onClick={handleToggle}
        onMouseLeave={handleMouseLeave}
        id="moon-right"
        name="moon-right"
      >
        <MoonSvg />
      </button>
    </div>
  )
}

export default ToggleTheme
