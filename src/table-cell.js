import React from 'react'

import {Slot} from './slot'

const total = 12
const slots = Array.from({length: total}, (_, i) => `${i + total - 1}:00`)
const percentage = actual => (actual / total) * 100
// get hue value in range from green (120) to red (0)
const getHue = percent => ((100 - percent) * Math.abs(120 - 0)) / 100

export const TableCell = ({data}) => {
  const percent = percentage(data.length)
  const color = percent === 0 ? 'unset' : `hsl(${getHue(percent)}, 75%, 50%)`

  const renderSlot = time => (
    <Slot key={time} time={time} busy={data.includes(time)} />
  )

  return (
    <div className="cell">
      <div className="cell-header">
        <span style={{color}}>{Math.round(percent)}</span>
        <span>%</span>
        <span tabIndex="0">•••</span>
      </div>
      <div className="slots">{slots.map(renderSlot)}</div>
    </div>
  )
}
