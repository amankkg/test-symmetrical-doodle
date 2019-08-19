import React from 'react'

import {TableCell} from './table-cell'

const renderDayCell = (data, i) => <TableCell key={i} data={data} />

export const TableRow = ({id, seatNum, type, days}) => (
  <div>
    <span>
      <h2>{id}</h2>
      <span>
        {seatNum} seat(s), {type}
      </span>
    </span>
    {days.map(renderDayCell)}
  </div>
)
