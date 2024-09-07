import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #4b0082; /* Darker purple background */
  color: lightblue; /* Light blue text color */
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center-align items */
`;

const SidebarTitle = styled.h2`
  margin: 0;
  padding-bottom: 10px;
  font-size: 1.5rem;
  color: lightblue; /* Light blue color for the main title */
`;

const SidebarSubheading = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #e6e6fa; /* Very light purple for the subheading */
  font-weight: normal;
  text-align: center;
  padding-bottom: 20px;
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center; /* Center-align items vertically */
  justify-content: center; /* Center-align items horizontally */
  width: 200px; /* Fixed width for uniformity */
  height: 50px; /* Fixed height for uniformity */
  color: lightblue;
  text-decoration: none;
  margin: 10px 0;
  padding: 0;
  border-radius: 5px;
  background-color: #6a5acd; /* Lighter purple background for links */
  font-size: 1rem; /* Uniform font size for links */
  text-align: center; /* Center-align text */
  
  &.active {
    background-color: #8a2be2; /* Even lighter purple for active link */
  }

  &:hover {
    background-color: #8a2be2; /* Even lighter purple on hover */
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>Taskie</SidebarTitle>
      <SidebarSubheading>Your personal task manager assistant</SidebarSubheading>
      <SidebarLink to="/list" end>
        List
      </SidebarLink>
      <SidebarLink to="/calendar">
        Calendar
      </SidebarLink>
      <SidebarLink to="/board">
        Board
      </SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
