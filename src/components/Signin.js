// Import necessary dependencies
import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Backend connection URL
const backend = 'http://localhost:5001/api/signin';

// Functional component for user signIn
function SignInForm() {
    // State variables to store user input for signIn
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    // UseNavigate hook to enable navigation within the application
    const history = useNavigate();

    // Function to handle sign-in form submission
    const handleSignIn = async (e) => {
        e.preventDefault();  // Prevent the default form submission behavior

        try {
            // Send a POST request to the backend with user credentials
            const response = await axios.post(backend, {
                username,
                password,
            });

            // Log the response from the backend
            console.log('Response from backend:', response);

            // Check the response status for successful sign-in
            if (response.status === 200) {
                // Successful sign-in, navigate to the home page
                history("/");
            } else {
                // Handle unsuccessful sign-in

                // Log detailed information about the failure
                console.log('Authentication failed. Response:', response);

                // Check specific error messages from the backend
                if (response.data && response.data.error === 'User does not exist') {
                    // User doesn't exist, prompt user to register
                    alert("User does not exist. Please register for an account.");
                } else if (response.data && response.data.error === 'Invalid credentials') {
                    // Incorrect password
                    alert("Invalid credentials. Please try again.");
                } else {
                    // Other server error
                    console.log('Unexpected error during sign-in. Response:', response);
                    alert("An error occurred during sign-in. Please try again later.");
                }
            }
        } catch (error) {
            // Handle other errors, e.g., network issues or server errors

            // Log the error for debugging purposes
            console.error("Error during sign-in:", error);

            // Display a generic error message to the user
            alert("An error occurred. Please try again later.");
        }
    };

    // Render the sign-in component
    return (
        <div>
            {/* Sign-in form using Bootstrap components */}
            <Form onSubmit={handleSignIn} className="d-grid gap-2" style={{ margin: "5rem" }}>
                {/* Input field for username */}
                <Form.Group className="mb-3" controlId="formBasicSignInUsername">
                    <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </Form.Group>

                {/* Input field for password */}
                <Form.Group className="mb-3" controlId="formBasicSignInPassword">
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                {/* Button to submit the sign-in form */}
                <Button variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
        </div>
    );
}

// Export SignInForm as the default export
export default SignInForm;
