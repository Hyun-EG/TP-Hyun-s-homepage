import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [value, onChange] = useState<any>(new Date());

  return (
    <div className="calendarComponent">
      <div className="calendarComponent__container">
        <Calendar
          className="calendarComponent__container__calendar"
          value={value}
          onChange={onChange}
          defaultView="month"
          nextLabel="다음 달"
          next2Label="내년"
          prevLabel="이전 달"
          prev2Label="작년"
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
