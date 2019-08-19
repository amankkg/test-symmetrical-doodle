import React from 'react'

export const Slot = ({time, busy}) => (
  <span className={busy ? 'slot busy' : 'slot'}>{time}</span>
)
