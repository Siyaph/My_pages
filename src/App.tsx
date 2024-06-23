// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CourseListing from './components/CourseListing';
import Contracts from './components/Contracts';
import Reports from './components/Reports';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Routes>
        <Route path="/courses" element={<CourseListing />} />
          <Route path="/courses" element={<CourseListing />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/Reports" element={<Reports />} />

          {/* Add other routes here */}
        </Routes>
      </main>
    </div>
  );
};

export default App;
