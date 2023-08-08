import ToolDev, { ToolDevProps } from './toolCard/ToolCard'
import './ToolDevList.sass'
import ReactSvg from '../../icons/ReactSvg'
import ReactRouterSvg from '../../icons/ReactRouterSvg'
import SassSvg from '../../icons/SassSvg'
import TypeScriptSvg from '../../icons/TypeScriptSvg'

const ToolDevList = () => {
  const tools: ToolDevProps[] = [
    {
      name: 'React',
      children: <ReactSvg />
    },
    {
      name: 'React Router',
      children: <ReactRouterSvg />
    },
    {
      name: 'Sass',
      children: <SassSvg />
    },
    {
      name: 'Type Script',
      children: <TypeScriptSvg />
    }
  ]

  return (
    <div className="tool-dev">
      <h3>Outils utilisés</h3>
      <div className="tool-dev__list">
        {tools.map((tool, index) => (
          <ToolDev key={index} name={tool.name}>
            {tool.children}
          </ToolDev>
        ))}
      </div>
    </div>
  )
}

export default ToolDevList
