import React from 'react'

import {TableRow} from './table-row'

const renderRow = data => <TableRow key={data.id} {...data} />

export const Table = ({data}) => <div>{data.map(renderRow)}</div>
