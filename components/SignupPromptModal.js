import React from 'react';
import './SignupPromptModal.css'; // Create this CSS file for styling

const SignupPromptModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Sign Up Required</h2>
        <p>You don't have an account. Please sign up first.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SignupPromptModal;
