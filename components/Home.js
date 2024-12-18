import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// Button Component for reusability
const Button = ({ text, onClick, className }) => (
  <button className={`btn ${className}`} onClick={onClick}>
    {text}
  </button>
);

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to HLS Application</h1>
        <p className="home-subtitle">Your one-step solution for all your needs</p>
      </header>
      <main className="home-content">
        <p>Join us today to explore amazing features and simplify your tasks.</p>
        <div className="button-group">
          <Button 
            text="Sign Up" 
            onClick={() => navigate('/signup')} 
            className="btn-primary" 
          />
          <Button 
            text="Login" 
            onClick={() => navigate('/login')} 
            className="btn-secondary" 
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
