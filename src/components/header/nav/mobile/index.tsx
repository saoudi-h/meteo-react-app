import React, { useState, useEffect } from 'react'
import './NavMobile.sass'
import NavButtonSvg from '../../../icons/NavButtonSvg'
import { NavLink, useLocation } from 'react-router-dom'
import { useTrail, animated, useSpring } from '@react-spring/web'
import { NavItem } from '../navTypes'
import { Modal } from '@mui/base/Modal'
import { classNames } from '../../../../lib/classnames'
import PropTypes from 'prop-types'

interface NavMobileProps {
  navItems: NavItem[]
}
const NavMobile: React.FC<NavMobileProps> = ({ navItems }) => {
  const location = useLocation()
  const getSelectedLocation = () =>
    navItems.find((item) => item.path === location.pathname) || navItems[0]

  const [selectedItem, setSelectedItem] = useState<NavItem>(getSelectedLocation())
  const [isOpen, setOpen] = useState<boolean>(false)
  const [props, api] = useSpring(
    () => ({
      from: {
        opacity: isOpen ? 0 : 1
      },
      to: {
        opacity: isOpen ? 1 : 0
      },
      delay: isOpen ? 0 : 200
    }),
    [isOpen]
  )

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    if (selectedItem.path !== location.pathname) setSelectedItem(getSelectedLocation())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <div className="nav-mobile">
      <button className="nav-mobile__button" onClick={() => setOpen((prev) => !prev)}>
        <NavButtonSvg open={isOpen} />
        <div>{selectedItem.name}</div>
      </button>

      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={isOpen}
        onClose={handleClose}
        // slots={{ backdrop: Backdrop }}
        className="nav-mobile__modal"
        closeAfterTransition
      >
        <Fade in={isOpen}>
          <animated.ul className="nav-mobile__list" style={{ ...props }}>
            <Trail open={isOpen}>
              {navItems.map((item) => {
                if (item.path !== location.pathname)
                  return (
                    <NavLink to={item.path} className="link" onClick={handleClose}>
                      <div key={item.path}>{item.name}</div>
                    </NavLink>
                  )
              })}
            </Trail>
          </animated.ul>
        </Fade>
      </Modal>
    </div>
  )
}

export default NavMobile

const Trail: React.FC<{ open: boolean; children: React.ReactNode }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    delay: open ? 200 : 0,
    opacity: open ? 1 : 0,
    x: open ? 0 : 10,
    height: open ? 50 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  })
  return (
    <>
      {trail.map(({ ...style }, index) => (
        <animated.li key={index} className="" style={style}>
          {items[index]}
        </animated.li>
      ))}
    </>
  )
}

type BackdropProps = {
  open?: boolean
  className?: string
} & React.HTMLProps<HTMLDivElement>

const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  const { open, className, ...other } = props
  return (
    <div
      className={classNames(open ? 'MuiBackdrop-open' : '', className, 'nav-mobile__backdrop')}
      ref={ref}
      {...other}
    />
  )
})

type FadeProps = {
  children: React.ReactElement
  in?: boolean
  onEnter?: (node: HTMLElement | null, isAppearing: boolean) => void
  onExited?: (node: HTMLElement | null, isAppearing: boolean) => void
  [key: string]: any
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true)
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true)
      }
    }
  })

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  )
})

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onEnter: PropTypes.func,
  onExited: PropTypes.func
}
