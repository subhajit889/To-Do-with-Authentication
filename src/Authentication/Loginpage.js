import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { Link } from 'react-router-dom';

const Loginpage = () => {

    const [showDialog, setShowDialog] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSignUp = (e) => {
        e.preventDefault();

        // Check if all form fields are filled
        if (
            formData.name &&
            formData.email &&
            formData.contact &&
            formData.password
        ) {
            console.log('submitted');
            setShowDialog(true);
        } else {
            // If any field is missing, do not show the dialog
            alert('Please fill in all fields before signing up.');
        }
    };

    const handleDialogClose = () => {
        // Clear the form data and close the dialog
        setFormData({
            name: '',
            email: '',
            contact: '',
            password: '',
        });
        setShowDialog(false);
        createUserWithEmailAndPassword(auth, formData.email, formData.password).then(res => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <>
            <div className="section2">
                <h1 className="form-heading">Sign Up here...</h1>
                <form action="" className="login-form" id="signup-form">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Full Name"
                        required
                        onChange={handleInputChange}
                        value={formData.name}
                    />

                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter e-mail"
                        required
                        onChange={handleInputChange}
                        value={formData.email}
                    />

                    <label htmlFor="contact">Contact No:</label>
                    <input
                        type="tel"
                        id="contact"
                        name="contact"
                        placeholder="Enter your contact number with country code"
                        required
                        onChange={handleInputChange}
                        value={formData.contact}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Enter Password'
                        required
                        onChange={handleInputChange}
                        value={formData.password}
                    />

                    <div className="button-container">
                        <button
                            type="submit"
                            className="signup-btn"
                            id="signUP"
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </button>
                        <h2 className="or-text">OR</h2>
                        <Link to="/"><button className="back-button" id='back'>Go to Home</button></Link>
                    </div>
                </form>
            </div>
            {showDialog && (
                <div className="dialog">
                    <p>Congratulations! You have successfully Signed up.</p>
                    <Link to="/"><button onClick={handleDialogClose}>Close</button></Link>
                    <p>Now you can Close. . Thank You</p>
                </div>
            )}
        </>
    );
};

export default Loginpage;