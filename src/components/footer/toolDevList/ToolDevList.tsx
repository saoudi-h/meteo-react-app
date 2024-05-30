import ToolDev, { ToolDevProps } from './toolCard/ToolCard'
import './ToolDevList.sass'
import ReactSvg from '../../icons/ReactSvg'
import ReactRouterSvg from '../../icons/ReactRouterSvg'
import SassSvg from '../../icons/SassSvg'
import TypeScriptSvg from '../../icons/TypeScriptSvg'
import { AkarIconsReduxFill } from '../../icons/AkarIconsReduxFill'
import { MdiFunction } from '../../icons/MdiFunction'

const ToolDevList = () => {
  const tools: ToolDevProps[] = [
    {
      name: 'React',
      children: <ReactSvg />
    },
    {
      name: 'Redux',
      children: <AkarIconsReduxFill />
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
      name: 'Vercel Functions',
      children: <MdiFunction />
    },
    {
      name: 'Typescript',
      children: <TypeScriptSvg />
    }
  ]

  return (
    <div className="tool-dev">
      <h2 style={{ fontSize: '1.26rem' }}>Outils utilisés</h2>
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
