import React from 'react';
import { HashRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-brand">
              <span className="brand-text">Portfolio</span>
            </div>
            <ul className="nav-menu">
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/projects" 
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <footer className="footer">
          <p>© 2025 SHRUTHIKA KUNTA</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
