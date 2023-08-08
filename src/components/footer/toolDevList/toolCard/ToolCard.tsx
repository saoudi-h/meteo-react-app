import React from 'react'
import './ToolCard.sass'

export interface ToolDevProps {
  name: string
  children: React.ReactNode
}
const ToolCard: React.FC<ToolDevProps> = ({ name, children }) => {
  return (
    <div className="tool-card">
      <div className="tool-logo">{children}</div>
      <p className="tool-name">{name}</p>
    </div>
  )
}

export default ToolCard
