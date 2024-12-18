import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';
import SignupPromptModal from './SignupPromptModal'; // Import the modal

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear previous errors

    // Simulate login process
    const userExists = false; // Example condition, replace with real API call

    setTimeout(() => {
      setLoading(false); // Stop loading after process
      if (!userExists) {
        setError('User not found! Please check your credentials or sign up.');
        setShowModal(true); // Show modal if user doesn't exist
      } else {
        console.log('Logging in with:', email, password);
        navigate('/'); // Redirect to home page on successful login
      }
    }, 1500); // Simulate network delay
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="auth-container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {error && <div className="error-message">{error}</div>} {/* Display error */}
        
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          aria-label="Email"
          className="auth-input"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          aria-label="Password"
          className="auth-input"
        />
        <button 
          type="submit" 
          className="auth-button"
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p className="auth-footer">
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
      {showModal && <SignupPromptModal onClose={handleCloseModal} />} {/* Show modal */}
    </div>
  );
};

export default Login;
