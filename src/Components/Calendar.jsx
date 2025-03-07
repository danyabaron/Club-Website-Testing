import React, { useState, useEffect } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events] = useState([
    { dayOfWeek: 6, title: "Club Meeting" },  // Saturday (6)
    { dayOfWeek: 2, title: "Tabling" },       // Tuesday (2)
    { dayOfWeek: 3, title: "Tabling" },       // Wednesday (3)
    { dayOfWeek: 5, title: "Workshop" },      // Friday (5)
  ]);

  useEffect(() => {
    renderCalendar();
  }, [currentDate]);

  // Function to get the days of the month
  const getMonthDays = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    let days = [];
    let dayOfWeek = firstDay.getDay();

    // Add empty divs for the days before the first day of the month
    for (let i = 0; i < dayOfWeek; i++) {
      days.push({ date: "", isToday: false });
    }

    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const isToday = new Date().toISOString().split("T")[0] === fullDate;
      days.push({ date: day, fullDate, isToday });
    }

    return days;
  };

  const renderCalendar = () => {
    const monthDays = getMonthDays(currentDate.getFullYear(), currentDate.getMonth());
    return monthDays;
  };

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  const monthDays = renderCalendar();
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <div className="calendar-container max-w-6xl mx-auto mt-12 px-4">
      <div className="calendar-header text-center mb-6">
        <h3 className="text-2xl font-bold drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
          <span id="calendar-month-year">{monthName} {year}</span>
        </h3>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => changeMonth(-1)}
            className="w-16 h-16 text-2xl p-2 bg-gray-700 text-white hover:bg-gray-600"
          >
            ⬅️
          </button>

          <button
            onClick={() => changeMonth(1)}
            className="w-16 h-16 text-2xl p-2 bg-gray-700 text-white hover:bg-gray-600 ml-4"
          >
            ➡️
          </button>
        </div>
      </div>
      <div className="calendar grid grid-cols-7 gap-1 text-center">
        {/* Day labels */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((label) => (
          <div key={label} className="day">{label}</div>
        ))}

        {/* Calendar Days */}
        {monthDays.map((day, index) => (
          <div key={index} className={`day ${day.isToday ? "current-day" : ""}`}>
            {day.date}

            {/* Check for recurring events */}
            {events.map((event, idx) => {
              // Check if the day of the week matches the event's dayOfWeek (0-Sunday, 1-Monday, etc.)
              if (new Date(currentDate.getFullYear(), currentDate.getMonth(), day.date).getDay() === event.dayOfWeek) {
                return (
                  <div key={idx} className="event">
                    {event.title}
                  </div>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
