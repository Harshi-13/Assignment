import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useTasks } from '../contexts/TaskContext';
import './Board.css';

const Board = () => {
  const { tasks, moveTask, deleteTask } = useTasks();

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If there's no destination, do nothing
    if (!destination) return;

    const sourceList = source.droppableId;
    const destinationList = destination.droppableId;

    moveTask(sourceList, destinationList, source.index, destination.index);
  };

  const markAsCompleted = (taskId) => {
    moveTask('todo', 'completed', tasks['todo'].findIndex(task => task.id === taskId), 0);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board-container">
        <h2 className="board-heading">Task Board</h2>
        <div className="columns">
          {['todo', 'completed'].map((listName) => (
            <Droppable key={listName} droppableId={listName}>
              {(provided) => (
                <div
                  className="column"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h3>{listName.charAt(0).toUpperCase() + listName.slice(1)}</h3>
                  {tasks[listName].map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          className="task-card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <h4>{task.name}</h4>
                          <p className="task-description">{task.description}</p>
                          <p>Due: {task.endDate} at {task.time}</p>
                          {listName === 'todo' && (
                            <button onClick={() => markAsCompleted(task.id)}>
                              Mark as Completed
                            </button>
                          )}
                          <button onClick={() => {
                            console.log('Deleting task from:', listName, 'Task ID:', task.id);
                            deleteTask(listName, task.id);
                          }}>
                            Delete
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </div>
    </DragDropContext>
  );
};

export default Board;
