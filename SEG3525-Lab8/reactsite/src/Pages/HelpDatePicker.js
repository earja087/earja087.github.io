import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function HelpDatePicker () {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className='HelpDatePicker'>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        placeholderText={'dd/mm/yyyy'}
        filterDate={date => date.getDay() !== 1 && date.getDay() !== 2 && date.getDay() !== 4 && date.getDay() !== 5 && date.getDay() !== 6}
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  )
}

export default HelpDatePicker
