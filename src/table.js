import React from 'react'

import {DayCell} from './day-cell'
import {TableRow} from './table-row'

const renderRow = data => <TableRow key={data.id} {...data} />
const daysRow = (
  <div className="row hrow">
    <span className="cell hcell"></span>
    <DayCell month="April" day="10" />
    <DayCell month="April" day="11" />
  </div>
)

export const Table = ({data}) => <div className="table">{daysRow}{data.map(renderRow)}</div>
