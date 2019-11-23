import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


const Calendar = (props) => (
  <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} {...props} />
)

export default Calendar
