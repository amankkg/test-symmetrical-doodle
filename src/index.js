import React from 'react'
import {render} from 'react-dom'

import './styles.css'
import {Table} from './table'

const data = [
  {id: 1, seatNum: 2, type: 'VIP', days: [['13:00', '16:00', '17:00', '19:00'], ['16:00', '19:00']]},
  {id: 2, seatNum: 3, type: 'standard', days: [['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '22:00'], ['11:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']]},
  {id: 3, seatNum: 2, type: 'VIP', days: [['13:00', '16:00', '17:00'], ['16:00']]},
]

render(<Table data={data} />, document.querySelector('#root'))
