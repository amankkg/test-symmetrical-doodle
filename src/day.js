import React from 'react'

export const Day = ({day, month}) => {
  // TODO: bullet color and status should be calculated
  const bulletStyle = {color: '#E8CE4D'}
  const bullet = day > 10 ? null : <>&bull;</>

  return (
    <div className="day">
      <span style={bulletStyle}>{bullet}</span>
      <span>
        {month}, {day}
      </span>
    </div>
  )
}
