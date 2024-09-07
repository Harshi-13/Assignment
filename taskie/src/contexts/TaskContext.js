import React, { createContext, useState, useContext } from 'react';

// Create Context
const TaskContext = createContext();

// Provider Component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState({
    todo: [],
    completed: [],
  });

  const addTask = (task) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      todo: [...prevTasks.todo, { ...task, id: `${Date.now()}` }]
    }));
  };

  const deleteTask = (type, index) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [type]: prevTasks[type].filter((_, i) => i !== index)
    }));
  };

  const moveTask = (fromType, toType, fromIndex, toIndex) => {
    const task = tasks[fromType][fromIndex];
    setTasks(prevTasks => ({
      ...prevTasks,
      [fromType]: prevTasks[fromType].filter((_, i) => i !== fromIndex),
      [toType]: [...prevTasks[toType].slice(0, toIndex), task, ...prevTasks[toType].slice(toIndex)]
    }));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, moveTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use the TaskContext
export const useTasks = () => useContext(TaskContext);
