import React from 'react'
import {render} from 'react-dom'

import './styles.css'
import {Table} from './table'

const tables = [
  {id: 1, seatNum: 2, type: 'VIP'},
  {id: 2, seatNum: 3, type: 'standard'},
  {id: 3, seatNum: 2, type: 'VIP'},
  {id: 4, seatNum: 2, type: 'standard'},
  {id: 5, seatNum: 2, type: 'standard'},
  {id: 6, seatNum: 3, type: 'VIP'},
]

// 11:00 to 22:00
const slots = Array.from({length: 12}, (_, i) => i + 11 + ':00')
// the farther the date, the less chance
const fillSlots = x =>
  slots.filter(() => Math.random() > Math.min(x / 10 + 0.5, 0.9))
// 10-30 April
const days = Array.from({length: 21}, (_, i) => ({day: i + 10, month: 'April'}))
// tables with reservations
for (const t of tables) t.days = days.map((_, i) => fillSlots(i))

render(<Table data={tables} days={days} />, document.querySelector('#root'))
