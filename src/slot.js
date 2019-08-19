import React from 'react'

export const Slot = ({time, busy}) => (
  <span className={busy ? 'busy' : ''}>{time}</span>
)
