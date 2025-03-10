import React, { useState } from 'react';
import '../login-signup/Auth.css'

// Validation function for password
const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
};

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Handle login logic (API call or state management)
    alert(`Logging in with ${email} and password`);
  };

  const handleSignup = () => {
    if (!validatePassword(password)) {
      setErrorMessage(
        'Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one symbol.'
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    // Handle signup logic (API call or state management)
    alert(`Account Created!`);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrorMessage('');
  };

  return (
    <div className="page">
    <div className="auth-container">
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {!isLogin && (
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button
          type="button"
          onClick={isLogin ? handleLogin : handleSignup}
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <span onClick={toggleForm}>
          {isLogin ? ' Create one' : ' Login'}
        </span>
      </p>
    </div>
    </div>
  );
};

export default Auth;
