import React, { createContext, useContext, useEffect, useState } from 'react'

type MouseMoveEventContextType = React.MouseEvent | null

const MouseMoveEventContext = createContext<MouseMoveEventContextType>(null)

export const MouseMoveEventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mouseMoveEvent, setMouseMoveEvent] = useState<any>(null)

  const handleMouseMoveMove = (e: MouseEvent) => {
    setMouseMoveEvent(e)
  }

  useEffect(() => {
    document.body.addEventListener('mousemove', handleMouseMoveMove)
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMoveMove)
    }
  }, [])

  return (
    <MouseMoveEventContext.Provider value={mouseMoveEvent}>
      {children}
    </MouseMoveEventContext.Provider>
  )
}

export const useMouseMoveEvent = (): MouseMoveEventContextType => {
  return useContext(MouseMoveEventContext)
}
