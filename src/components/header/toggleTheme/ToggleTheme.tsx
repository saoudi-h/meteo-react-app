import React, { useEffect, useState } from 'react'
import { useTheme } from '../../../contexts/ThemeContext'
import './ToggleTheme.sass'
import SunSvg from '../../icons/SunSvg'
import MoonSvg from '../../icons/MoonSvg'
import { useSpring, animated } from '@react-spring/web'

const ToggleTheme: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [leftValue, setLeftValue] = useState('')
  const [rightValue, setRightValue] = useState('')

  useEffect(() => {
    setLeftValue(theme !== 'dark' ? '3px' : 'unset')
    setRightValue(theme !== 'dark' ? 'unset' : '3px')
  }, [theme])

  const [springs, api] = useSpring(() => ({
    to: {
      width: '30px',
      x: theme === 'dark' ? 30 : 0,
      borderRadius: theme === 'dark' ? '15px 3px 3px 15px' : '3px 15px 15px 3px',
    },
  }))

  const handleToggle = () => {
    const borderRadiusValue = theme === 'dark' ? '15px 3px 3px 15px' : '3px 15px 15px 3px'

    api.start({
      borderRadius: borderRadiusValue,
    })
    toggleTheme()
  }

  const handleMouseOver = () => {
    if (!isHovered) {
      setIsHovered(true)
      api.start({
        width: '40px',
      })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    api.start({
      width: '30px',
    })
  }

  return (
    <div className="toggle-theme">
      <animated.div
        className="toggle-theme__switch"
        style={{ left: leftValue, right: rightValue, ...springs }}
      />
      <div
        className="toggle-theme__svg-box"
        onMouseOver={handleMouseOver}
        onClick={handleToggle}
        onMouseLeave={handleMouseLeave}
      >
        <SunSvg />
      </div>
      <div
        className="toggle-theme__svg-box"
        onMouseOver={handleMouseOver}
        onClick={handleToggle}
        onMouseLeave={handleMouseLeave}
      >
        <MoonSvg />
      </div>
    </div>
  )
}

export default ToggleTheme
