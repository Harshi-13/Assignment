import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './contexts/TaskContext';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import Board from './components/Board';
import CalendarView from './components/Calendar'; // Updated import
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  background-color: #E6E6FA;
`;

const Content = styled.div`
  padding: 20px;
  width: 100%;
`;

const Heading = styled.h2`
  color: ${props => props.color || 'black'}; /* Provide a default color */
`;

function App() {
  return (
    <Router>
      <TaskProvider>
        <AppContainer>
          <Sidebar />
          <Content>
            <Heading color="babyblue"></Heading> {/* Add content or make dynamic */}
            <Routes>
              <Route path="/list" element={<TaskList />} />
              <Route path="/calendar" element={<CalendarView />} />
              <Route path="/board" element={<Board />} />
            </Routes>
          </Content>
        </AppContainer>
      </TaskProvider>
    </Router>
  );
}

export default App;
