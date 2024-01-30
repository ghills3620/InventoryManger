// Import necessary dependencies from React and Bootstrap
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Backend connection
const backend = 'http://localhost:5001/api/signup';

// Functional component for user registration
function Signup() {
    // State variables to store user input
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // UseNavigate hook to enable navigation within the application
    const history = useNavigate();

    // Function to handle form submission when the user clicks the "Sign Up" button
    const handleSubmit = async (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            // Perform user registration logic
           const response =  await axios.post(backend, {
                firstname,
                lastname,
                username,
                password,
            });

            console.log('Response from backend:', response);


            // Display a success message
            alert("Account created successfully!");

            // Redirect the user to the home page after successful registration
            history("/");
        } catch (error) {
            // Handle any error that occurred during the API call
            console.error("Error during registration:", error);
            alert("An error occurred during registration. Please try again later.");
        }
    };

    // Render the Signup component
    return (
        <div>
            {/* Form for user registration */}
            <Form className="d-grid gap-2" style={{ margin: "5rem" }}>

                {/* Input field for First Name */}
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        value={firstname}
                        onChange={(e) => setfirstname(e.target.value)}
                        required
                    />
                </Form.Group>

                {/* Input field for Last Name */}
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Control
                        type="text"
                        placeholder="Enter Last Name"
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                        required
                    />
                </Form.Group>

                {/* Input field for username */}
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </Form.Group>

                {/* Input field for password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                {/* Input field for confirming password */}
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                {/* Button to submit the form */}
                <Button onClick={(e) => handleSubmit(e)} variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
}

// Export the Signup component as the default export
export default Signup;
