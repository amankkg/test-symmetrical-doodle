import React from 'react'

import {TableCell} from './table-cell'

const renderDayCell = (data, i) => <TableCell key={i} data={data} />

export const TableRow = ({id, seatNum, type, days}) => (
  <div className="row">
    <span className="cell hcell">
      <h2>{id}</h2>
      <p>
        {seatNum} seat(s), {type}
      </p>
    </span>
    {days.map(renderDayCell)}
  </div>
)
