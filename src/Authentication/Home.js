import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Home = () => {
  const [showLoginBox, setShowLoginBox] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Check if a user is already logged in when the component mounts
  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedInUser(user);
      } else {
        setLoggedInUser(null);
      }
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Check if all form fields are filled
    if (email && password) {
      const auth = getAuth(); // Get the authentication instance

      // Sign in with email and password using Firebase
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Successfully signed in
          const user = userCredential.user;
          console.log('User signed in:', user);
          setLoggedInUser(user); // Set the logged-in user in state
          alert('Logged in successfully!');
          setShowLoginBox(false); // Close the login box
        })
        .catch((error) => {
          // Handle sign-in errors
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error:', errorCode, errorMessage);
          alert('Error signing in. Please check your credentials.');
        });
    } else {
      // If any field is missing, show an error message
      alert('Please fill in all fields before logging in.');
    }
  };

  const handleSignOut = () => {
    const auth = getAuth();

    // Sign out the user
    signOut(auth)
      .then(() => {
        setLoggedInUser(null); // Clear the logged-in user state
        alert('Logged out successfully!');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  const toggleLoginBox = () => {
    setShowLoginBox(!showLoginBox);
  };

  return (
    <div className="total-section">
      <div className="section1">
        <h1 className="section1-heading">
          Welcome
          <span className="logged-in-name">
            {loggedInUser ? ` ${loggedInUser.email}!` : ''}
          </span>
          <br />
        </h1>
        {loggedInUser ? (
          <button className="logout-btn" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <>
            <p className="section1-para">Please login for more exciting details</p>
            <h2 className="register-here">
              Don't have any Account! <Link to="/login">Signup here</Link>
            </h2>
            <button className="login-btn" onClick={toggleLoginBox}>
              Login or Sign in
            </button>
          </>
        )}
      </div>
      {showLoginBox && (
        <div className="login-box">
          <h1 className="login-heading">Login Here!!!</h1>
          <form className="login-form" id="login-form">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleInputChange}
                value={formData.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleInputChange}
                value={formData.password}
              />
            </div>
            <button type="submit" onClick={handleLogin} className="login-button">
              Login
            </button>
            <button className="home-back" onClick={toggleLoginBox}>
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;