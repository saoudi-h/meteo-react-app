import React, { useState, useEffect } from 'react'
import './Nav.sass'
import { Link, useLocation } from 'react-router-dom'
import { useSpring, animated } from '@react-spring/web'

interface NavItem {
  path: string
  name: string
}

const Nav: React.FC = () => {
  const navItems: NavItem[] = [
    { path: '/', name: 'Accueil' },
    { path: '/weather', name: 'Météo' },
    { path: '/about', name: 'À propos' }
  ]

  const itemLength = 100
  const marginSwitch = 3
  const nmbrItems = navItems.length
  const itemPositions: { [key: string]: number } = {}
  navItems.forEach((item, index) => {
    itemPositions[item.path] = index
  })
  const location = useLocation()
  const [selectedItem, setSelectedItem] = useState<string>('/')
  const getLeftValue = (add: number = 0) =>
    itemPositions[selectedItem] * itemLength + marginSwitch + add + 'px'
  const getRightValue = (add: number = 0) =>
    (nmbrItems - 1 - itemPositions[selectedItem]) * itemLength + marginSwitch + add + 'px'
  const getBorderRadius = () => {
    const borderRadiusLeft = itemPositions[selectedItem] === 0 ? '15px' : '3px'
    const borderRadiusRight = itemPositions[selectedItem] === navItems.length - 1 ? '15px' : '3px'
    return `${borderRadiusLeft} ${borderRadiusRight} ${borderRadiusRight} ${borderRadiusLeft}`
  }

  useEffect(() => {
    setSelectedItem(location.pathname)
  }, [location])

  const [springs, api] = useSpring(() => ({
    from: {
      left: getLeftValue(),
      right: getRightValue(),
      borderRadius: getBorderRadius()
    }
  }))

  useEffect(() => {
    api.start({
      left: getLeftValue(),
      right: getRightValue(),
      borderRadius: getBorderRadius()
    })
  }, [location, selectedItem])

  const handleItemClick = (clickedPath: string) => {
    if (clickedPath !== selectedItem) {
      setSelectedItem(clickedPath)
    }
  }

  const handleItemHover = (hoveredPath: string) => {
    if (hoveredPath !== selectedItem) {
      const isLeft = itemPositions[selectedItem] < itemPositions[hoveredPath]
      api.start({
        left: getLeftValue(isLeft ? 0 : -20),
        right: getRightValue(isLeft ? -20 : 0)
      })
    }
  }

  const handleItemHoverEnd = () => {
    api.start({
      left: getLeftValue(),
      right: getRightValue()
    })
  }

  return (
    <ul className="nav-toggle" id="nav-toggle">
      <animated.div className="toggle-item__switch" style={{ ...springs }} />
      {navItems.map((item) => (
        <li key={item.path} className={`${selectedItem === item.path ? 'selected' : ''}`}>
          <Link
            to={item.path}
            className="link"
            onClick={() => handleItemClick(item.path)}
            onMouseEnter={() => handleItemHover(item.path)}
            onMouseLeave={handleItemHoverEnd}
          >
            <div>{item.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Nav
