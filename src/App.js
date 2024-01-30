// Filename - App.js

// Import React and necessary dependencies
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Signup from "./components/Signup";
import SignInForm from "./components/Signin";

// Define the main App component
function App() {
    return (
        <div className="App">
            {/* Header for the inventory manager */}
            <h1 className="Green">Inventory Manager</h1>
            <h3>Track your inventory</h3>



            {/* Set up a React Router for navigation */}
            <Router>
                {/* Define routes for different components */}
                <Routes>
                    {/* Home route */}
                    <Route path="/" element={<Home />} />

                    {/* Create route */}
                    <Route path="/create" element={<Create />} />

                    {/* Edit route */}
                    <Route path="/edit" element={<Edit />} />

                    {/* Signup route */}
                    <Route path="/signup" element={<Signup />} />

                    {/* SignIn rout */}
                    <Route path="/SignInForm" element={<SignInForm />} />
                </Routes>
            </Router>
        </div>
    );
}

// Export the App component
export default App;
