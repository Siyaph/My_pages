// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <img src="/logo.png" alt="Shumani Logo" className="logo" />
      <nav className="nav-menu">
        <Link to="/" className="nav-item">HOME</Link>
        
        <Link to="/courses" className="nav-item">Request for Project</Link>
        <Link to="/contracts" className="nav-item">Agreements</Link>
        <Link to="/reports" className="nav-item">Reports</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
