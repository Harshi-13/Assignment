import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useTasks } from '../contexts/TaskContext';
import './Calendar.css'; // Make sure to create a CSS file for styling

const CalendarView = () => {
  const { tasks } = useTasks();
  const [date, setDate] = useState(new Date());
  const [dailyTasks, setDailyTasks] = useState([]);

  useEffect(() => {
    if (Array.isArray(tasks.todo)) {
      const selectedDate = date.toISOString().split('T')[0];
      const tasksForDate = tasks.todo.filter(task => task.endDate === selectedDate);
      setDailyTasks(tasksForDate);
    }
  }, [date, tasks]);

  const handleDateChange = newDate => {
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-heading">Task Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
      <div className="tasks-for-date">
        <h3>Tasks for {date.toDateString()}</h3>
        {dailyTasks.length === 0 ? (
          <p>No tasks for this day.</p>
        ) : (
          dailyTasks.map(task => (
            <div className="task-card" key={task.id}>
              <h4>{task.name}</h4>
              <p className="task-description">{task.description}</p>
              <p>Due: {task.endDate} at {task.time}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CalendarView;
