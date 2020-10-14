import React from 'react';
import './Calendar.css';
import Day from '../components/Day';
import { useDates } from '../hooks/useDates';
import moment from 'moment';

const Calendar = () => {
  const { days, month, year, nextMonth, prevMonth, firstDay, totalDays  } = useDates();

  const populateDates = () => {
    const blanks = [];
    for (let i = 0; i < firstDay; i++) {
      blanks.push('');
    }
    const dates = [];
    for (let i = 1; i <= totalDays; i++) {
      dates.push(i);
    }
    return [...blanks, ...dates];
  }

  return(
    <div className="calendar_container"> 
      <p align="center">Calendar</p>
      <div className="calendar__info">
        <div className="month-year">
          <div className="calendar__month"> {moment().month(month).format('MMMM')} </div>
          <div className="calendar__year"> {year} </div>
        </div>
        <div className="controls">
          <div className="prev" onClick={prevMonth} > &#9664; </div>
          <div className="next" onClick={nextMonth} >  &#9654; </div>
        </div>

      </div>
      <div className="calendar__week">
        {days.map(day => (
          <Day key={day} day={day}/>
        ))}
      </div>
      <div className="calendar_dates">
      {populateDates().map((date, i) => (
        date.toString() === moment().format('D') ?
        <div key={`${date}-${i}`} className="date today" > {date} </div> 
        :
        <div key={`${date}-${i}`} className="date" > {date} </div> 
      ))}
      </div>
    </div>
  );

}

export default Calendar;