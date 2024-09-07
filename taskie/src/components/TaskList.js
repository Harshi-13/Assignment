import React from 'react';
import { useTasks } from '../contexts/TaskContext';
import './TaskList.css';

const TaskList = () => {
  const { tasks, addTask, deleteTask } = useTasks();
  const [newTask, setNewTask] = React.useState({
    name: '',
    endDate: '',
    time: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(newTask, 'todo');
    setNewTask({ name: '', endDate: '', time: '', description: '' });
  };

  return (
    <div className="task-list">
      <h2 className="add-task-heading">Add New Task</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          name="name"
          placeholder="Task Name"
          value={newTask.name}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="endDate"
          value={newTask.endDate}
          onChange={handleInputChange}
        />
        <input
          type="time"
          name="time"
          value={newTask.time}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newTask.description}
          onChange={handleInputChange}
        />
        <button type="submit">Add Task</button>
      </form>

      <h3 className="todo-heading">TODO Tasks</h3>
      {tasks.todo.map((task) => (
        <div className="task-container" key={task.id}>
          <h4>{task.name}</h4>
          <p className="task-description">{task.description}</p>
          <p>Due: {task.endDate} at {task.time}</p>
          <button onClick={() => deleteTask('todo', task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
