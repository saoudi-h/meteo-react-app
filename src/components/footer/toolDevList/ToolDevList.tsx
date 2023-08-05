import React from 'react'
import ToolDev, { ToolDevProps } from '../toolDev/ToolDev'
import './ToolDevList.scss'
import ReactSvg from '../../icons/ReactSvg'
import ReactRouterSvg from '../../icons/ReactRouterSvg'

const ToolDevList = () => {

    const tools: ToolDevProps[] = [
        {
            name: "React",
            children: <ReactSvg/>,
        },
        {
            name: "React Router",
            children: <ReactRouterSvg/>,
        }
    ]

    return (
        <div className="tool-list">
            <h3>Outils utilisés</h3>
            {tools.map((tool, index) => (
                <ToolDev
                    key={index}
                    name={tool.name}
                >{tool.children}</ToolDev>
            ))}
        </div>
    )
}

export default ToolDevList