import React from 'react'

import {Slot} from './slot'

const total = 12
const slots = Array.from({length: total}, (_, i) => `${i + total - 1}:00`)
const percentage = actual => (actual / total) * 100

export const TableCell = ({data}) => {
  const renderSlot = time => <Slot key={time} time={time} busy={data.includes(time)} />

  return (
    <div>
      <span>
        {percentage(data.length)}
        <span>%</span>
      </span>
      {slots.map(renderSlot)}
    </div>
  )
}
