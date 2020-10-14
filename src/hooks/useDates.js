import { useState } from 'react';
import moment from 'moment';

export const useDates = () => {
  const days = moment.weekdaysShort();
  const [dateContext, setDateContext] = useState(moment());
  const [month, setMonth] = useState(dateContext.month());
  const [year, setYear] = useState(dateContext.year());
  const [firstDay, setFirstDay] = useState(dateContext.startOf('month').format('d'));
  const [totalDays, setTotalDays] = useState(dateContext.daysInMonth());

  const prevMonth = () => {
    let dateObj = {...dateContext};
    if (month !== 0) {
      dateObj = moment(dateObj).set('month', month - 1);
      setDateContext(dateObj);
      setMonth(dateObj.month());
      setFirstDay(dateObj.startOf('month').format('d'));
      setTotalDays(dateObj.daysInMonth());
    } else {
      setMonth(11);
      dateObj = moment(dateObj).set('month', 11);
      dateObj = moment(dateObj).set('year', year - 1);
      setYear(prevYear => prevYear - 1);
      setFirstDay(dateObj.startOf('month').format('d'));
      setTotalDays(dateObj.daysInMonth());
    }  
  }

  const nextMonth = () => {
    let dateObj = {...dateContext};
    if (month !== 11) {
      dateObj = moment(dateObj).set('month', month + 1);
      setDateContext(dateObj);
      setMonth(dateObj.month());
      setFirstDay(dateObj.startOf('month').format('d'));
      setTotalDays(dateObj.daysInMonth());
    } else {
      setMonth(0);
      dateObj = moment(dateObj).set('month', 0);
      dateObj = moment(dateObj).set('year', year + 1);
      setYear(prevYear => prevYear + 1);
      setFirstDay(dateObj.startOf('month').format('d'));
      setTotalDays(dateObj.daysInMonth());
    }
  }

  return {
    dateContext,
    month, days, nextMonth, prevMonth, year, firstDay, totalDays
  }
}