import React from 'react'

import {Day} from './day'
import {TableRow} from './table-row'

const renderRow = data => <TableRow key={data.id} {...data} />
const renderDay = ({day, month}) => (
  <Day key={day + month} day={day} month={month} />
)

export const Table = ({data, days}) => (
  <div className="table">
    <div className="row hrow">
      <span className="cell hcell"></span>
      {days.map(renderDay)}
    </div>
    {data.map(renderRow)}
  </div>
)
