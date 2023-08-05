import React from 'react'
import './ToolDev.scss'

export interface ToolDevProps {
    name: string;
    children: React.ReactNode;
}
const ToolDev: React.FC<ToolDevProps> = ({ name,children }) => {

    return (
        <div className="tool-card">
            <div className="tool-logo">{children}</div>
            <p className="tool-name">{name}</p>
        </div>
    )
}

export default ToolDev