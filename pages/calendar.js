import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'

const FullCalendar = dynamic(
  () => import('../components/Calendar'),
  {
    ssr: false,
    loading: () => <p>Loading Calendar</p> 
  }
)

const CalendarPage = (props) => {
  return (
    <>
      <FullCalendar />
    </>
  )
}
export default CalendarPage

