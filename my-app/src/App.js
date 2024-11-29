import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeButton, setActiveButton] = useState('All');

  const employees = [
    { name: 'Johnson Wood', role: 'Front End Developer', email: 'Email:  johnsonwood@microsoft.com' },
    { name: 'John Doe', role: 'Team Lead', email: 'Email:  johndoe@microsoft.com' },
    { name: 'Fakhar Naveed', role: 'UI/UX Designer', email: 'Email:  fakhar@microsoft.com' },
    { name: 'Alex Made', role: 'Front End Developer', email: 'Email:  alexmade@microsoft.com' },
    { name: 'Johnson Wood', role: 'Front End Developer', email: 'Email:  johnsonwood@microsoft.com' },
    { name: 'John Doe', role: 'Team Lead', email: 'Email:  johndoe@microsoft.com' },
  ];

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="profile-container">
          <div className="profile">
            <img
              src="https://th.bing.com/th/id/OIP.bwCfz7U25h2JC6l0gHgEVQHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Profile"
              className="profile-pic"
            />
            <div className="profile-info">
              <span className="profile-name">Fakhar Naveed</span>
              <span className="profile-role">UI/UX Designer</span>
            </div>
          </div>
          <div className="filter-buttons">
            <button
              className={activeButton === 'All' ? 'active' : ''}
              onClick={() => handleButtonClick('All')}
            >
              All
            </button>
            <button
              className={activeButton === 'Active' ? 'active' : ''}
              onClick={() => handleButtonClick('Active')}
            >
              Active
            </button>
            <button
              className={activeButton === 'Inactive' ? 'active' : ''}
              onClick={() => handleButtonClick('Inactive')}
            >
              Inactive
            </button>
          </div>
        </div>
      </header>
      <main>
        <h1>Employees</h1>
        <div className="cards-container">
          {employees.map((employee, index) => (
            <div className="card" key={index}>
              <div className="card-profile">
                <img
                  src="https://th.bing.com/th/id/OIP.bwCfz7U25h2JC6l0gHgEVQHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt={employee.name}
                  className="card-pic"
                />
                <div className="card-info">
                  <h2>{employee.name}</h2>
                  <p>{employee.role}</p>
                </div>
              </div>
              <p className="email">{employee.email}</p>
              <div className="card-actions">
                <button className="block-btn">Block</button>
                <button className="details-btn">Details</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
