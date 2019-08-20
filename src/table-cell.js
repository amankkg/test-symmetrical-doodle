import React from 'react'

import {Slot} from './slot'

const total = 12
const slots = Array.from({length: total}, (_, i) => `${i + total - 1}:00`)
const percentage = actual => (actual / total) * 100 // TODO: add colors (from 1% green to 100% red)

export const TableCell = ({data}) => {
  const renderSlot = time => (
    <Slot key={time} time={time} busy={data.includes(time)} />
  )

  return (
    <div className="cell">
      <div className="cell-header">
        <span>{Math.round(percentage(data.length))}</span>
        <span>%</span>
        <span tabIndex="0">•••</span>
      </div>
      <div className="slots">{slots.map(renderSlot)}</div>
    </div>
  )
}
