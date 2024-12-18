import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear previous errors

    // Simulate signup logic (you can replace this with real signup logic)
    setTimeout(() => {
      setLoading(false);
      const userExists = false; // Simulate a condition for user existence (can be replaced with real API check)

      if (userExists) {
        setError('This email is already registered.');
      } else {
        console.log('Signing up with:', email, password);
        navigate('/'); // Redirect to home page on successful signup
      }
    }, 1500); // Simulate a network delay
  };

  return (
    <div className="auth-container">
      <h2>Create a New Account</h2>
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
          {loading ? 'Signing up...' : 'Signup'}
        </button>
      </form>
      <p className="auth-footer">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Signup;
