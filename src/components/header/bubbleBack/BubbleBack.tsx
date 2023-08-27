import './BubbleBack.sass'
import React, { useEffect } from 'react'
import useMeasure from 'react-use-measure'
import { useTrail, animated } from '@react-spring/web'
import { useMouseMoveEvent } from '../../../contexts/MouseMoveContext'

const bubbleList = [
  {
    constConfig: {
      diameter: '200px',
      color: '#90e0ef'
    },
    xy: [700, 0],
    config: { mass: 10, tension: 80, friction: 50 }
  },
  {
    constConfig: {
      diameter: '150px',
      color: '#a637cc'
    },
    xy: [200, 0],
    config: { mass: 10, tension: 70, friction: 50 }
  },
  {
    constConfig: {
      diameter: '80px',
      color: '#f8ae26ff'
    },
    xy: [200, 400],
    config: { mass: 10, tension: 50, friction: 500 }
  }
]

const trans = (x: number, y: number) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

interface BubbleBackProps {}
const BubbleBack: React.FC<BubbleBackProps> = () => {
  const mouseMoveEvent = useMouseMoveEvent()
  const [trail, api] = useTrail(bubbleList.length, (i) => ({
    xy: bubbleList[i].xy,
    config: bubbleList[i].config
  }))
  const [ref, { left, top }] = useMeasure()

  const handleMouseMove = (e: React.MouseEvent) => {
    api.start({ xy: [e.clientX - left, e.clientY - top] })
  }

  useEffect(() => {
    if (mouseMoveEvent) handleMouseMove(mouseMoveEvent)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseMoveEvent])

  return (
    <div className="bubble">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
        </filter>
      </svg>
      <div ref={ref} className="bubble__container">
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{
              transform: props.xy.to(trans),
              width: bubbleList[index].constConfig.diameter,
              height: bubbleList[index].constConfig.diameter,
              backgroundColor: bubbleList[index].constConfig.color
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default BubbleBack
