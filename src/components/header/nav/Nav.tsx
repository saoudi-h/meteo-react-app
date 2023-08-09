import React, { useState, useEffect } from 'react'
import './Nav.sass'
import { Link, useLocation } from 'react-router-dom'
import { useSpring, animated, SpringValue } from '@react-spring/web'

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
  const [selectedItem, setSelectedItem] = useState<string>(location.pathname)
  const [leftValue, setLeftValue] = useState<string>('')
  const [rightValue, setRightValue] = useState<string>('')
  const getLeftValue = () => itemPositions[selectedItem] * itemLength + marginSwitch + 'px'
  const getRightValue = () =>
    (nmbrItems - 1 - itemPositions[selectedItem]) * itemLength + marginSwitch + 'px'
  const getBorderRadius = () => {
    const borderRadiusLeft = itemPositions[selectedItem] === 0 ? '15px' : '3px'
    const borderRadiusRight = itemPositions[selectedItem] === navItems.length - 1 ? '15px' : '3px'
    return `${borderRadiusLeft} ${borderRadiusRight} ${borderRadiusRight} ${borderRadiusLeft}`
  }

  //   updateLeftRightValues()
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
    // console.log("selectedItem: ", selectedItem)
    // console.log("position: ", itemPositions[selectedItem])
    // console.log("navItems.length : ", navItems.length)

    api.start({
      left: getLeftValue(),
      right: getRightValue(),
      borderRadius: getBorderRadius()
    })
  }, [location, selectedItem])

  const handleItemClick = (clickedPath: string) => {
    if (clickedPath !== selectedItem) {
      const isLeft = itemPositions[selectedItem] < itemPositions[clickedPath]
      // setLeftValue(isLeft ? '3px' : 'unset')
      // setRightValue(isLeft ? 'unset' : '3px')
      console.log(itemPositions[clickedPath]! * 100)
      // api.start({
      //     left: getLeftValue(),
      //     right: getRightValue(),
      //     borderRadius: getBorderRadius(),
      // })
      setSelectedItem(clickedPath)
    }
  }

  const handleItemHover = (hoveredPath: string) => {
    if (hoveredPath !== selectedItem) {
      const isLeft = itemPositions[selectedItem] < itemPositions[hoveredPath]
      setLeftValue(isLeft ? '3px' : 'unset')
      setRightValue(isLeft ? 'unset' : '3px')
      api.start({})
    }
  }

  const handleItemHoverEnd = () => {
    if (selectedItem) {
      api.start({})
    }
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
