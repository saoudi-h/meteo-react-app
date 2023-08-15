import React, { useState, useEffect } from 'react'
import './Nav.sass'
import { NavLink, useLocation } from 'react-router-dom'
import { useSpring, animated } from '@react-spring/web'

interface NavItem {
  path: string
  name: string
}

const Nav: React.FC = () => {
  const location = useLocation()
  const defaultNavItems = [
    { path: '/', name: 'Accueil' },
    { path: '/weather', name: 'Météo' },
    { path: '/about', name: 'À propos' }
  ]
  const [navItems, setNavItems] = useState<NavItem[]>([...defaultNavItems])

  const genItemPosition = () => {
    const newItemPositions: { [key: string]: number } = {}
    navItems.forEach((item, index) => {
      newItemPositions[item.path] = index
    })
    return newItemPositions
  }

  const [itemPositions, setItemPositions] = useState<{ [key: string]: number }>(genItemPosition())

  const [notNavItems, setNotNavItems] = useState<NavItem[]>([{ path: '/credits', name: 'crédits' }])

  const itemLength = 100
  const marginSwitch = 3
  const nmbrItems = () => navItems.length

  useEffect(() => {
    setItemPositions(genItemPosition())
  }, [navItems])

  const [selectedItem, setSelectedItem] = useState<string>('/')

  const getLeftValue = (add: number = 0) => {
    const selectedPosition = itemPositions[selectedItem] || 0
    const left = selectedPosition * itemLength + marginSwitch + add + 'px'
    return left
  }

  const getRightValue = (add: number = 0) => {
    const selectedPosition = itemPositions[selectedItem] || 0
    const right = (nmbrItems() - 1 - selectedPosition) * itemLength + marginSwitch + add + 'px'
    return right
  }

  const getBorderRadius = () => {
    const borderRadiusLeft = itemPositions[selectedItem] === 0 ? '15px' : '3px'
    const borderRadiusRight = itemPositions[selectedItem] === navItems.length - 1 ? '15px' : '3px'
    return `${borderRadiusLeft} ${borderRadiusRight} ${borderRadiusRight} ${borderRadiusLeft}`
  }

  useEffect(() => {
    if (itemPositions[location.pathname] === undefined) {
      const unlistedItem = notNavItems.find(
        (notNavItem) => notNavItem.path === location.pathname
      ) || { path: '/notfound', name: 'Introuveable' }
      setSelectedItem(unlistedItem.path)
      setNavItems([...navItems, { ...unlistedItem }])
    } else {
      setSelectedItem(location.pathname)
      removeUnlistedItems()
    }
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
  }, [location, selectedItem, itemPositions])

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

  const removeUnlistedItems = () => {
    setNavItems([...defaultNavItems])
  }

  return (
    <ul className="nav-toggle" id="nav-toggle">
      <animated.div className="toggle-item__switch" style={{ ...springs }} />
      {navItems.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            className="link"
            onClick={() => handleItemClick(item.path)}
            onMouseEnter={() => handleItemHover(item.path)}
            onMouseLeave={handleItemHoverEnd}
          >
            <div>{item.name}</div>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Nav