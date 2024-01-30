// Import necessary modules and components from React and external libraries
import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

// Define a functional component named 'Home'
function Home() {
    // State to hold inventory data and function to update it
    const [inventoryData, setInventoryData] = useState([]);

    // React Router's navigation hook
    const history = useNavigate();

    // useEffect hook to fetch inventory data when the component mounts
    useEffect(() => {
        // Asynchronous function to fetch data from the API
        const fetchInventoryData = async () => {
            try {
                // Fetch data from the specified API endpoint
                const response = await fetch("http://localhost:5001/api/items");
                // Parse the JSON response
                const data = await response.json();
                // Update the state with the fetched data
                setInventoryData(data);
            } catch (error) {
                // Log an error message if there's an issue fetching data
                console.error("Error fetching inventory data:", error);
            }
        };

        // Call the fetchInventoryData function when the component mounts
        fetchInventoryData();
        console.log(fetchInventoryData());
    }, []);  // The empty dependency array ensures this effect runs only once on mount

    // Function to update an inventory entry
    const updateEntry = async (id) => {
        try {
            // Send a PUT request to update the item with the specified ID
            await fetch(`http://localhost:5001/api/items/${id}`, {
                method: 'PUT',
            });

            // After successful update, update the state to reflect the changes
            setInventoryData((prevData) => prevData.filter(item => item._id !== id));
        } catch (error) {
            // Log an error message if there's an issue updating the item
            console.error("Error updating item:", error);
        }
    };

    // Function to delete an inventory entry
    const deleteEntry = async (id) => {
        try {
            // Send a DELETE request to delete the item with the specified ID
            await fetch(`http://localhost:5001/api/items/${id}`, {
                method: 'DELETE',
            });

            // After successful deletion, update the state to reflect the changes
            setInventoryData((prevData) => prevData.filter(item => item._id !== id));
        } catch (error) {
            // Log an error message if there's an issue deleting the item
            console.error("Error deleting item:", error);
        }
    };

    // Render the component JSX
    return (
        <div style={{ margin: "6rem", display: "flex", flexDirection: "column" }}>
            {/* "Sign Up", and "Sign In" buttons */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <div style={{ display: "flex", gap: "10px" }}>

                    {/* Button to redirect to the Sign Up form */}
                    <Link to="/signup">
                        <Button variant="primary">Sign Up</Button>
                    </Link>

                    {/* Button to redirect to the Sign In form */}
                    <Link to="/SignInForm">
                        <Button variant="success">Sign In</Button>
                    </Link>

                </div>
            </div>

            {/* Display a Bootstrap Table to show inventory data */}
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {/* Map through inventoryData to create table rows for each item */}
                {inventoryData.map((item) => (
                    <tr key={item._id}>
                        {/* Display item details in each column */}
                        <td>{item.itemName}</td>
                        <td>
                            {item.description.length > 100
                                ? `${item.description.substring(0, 100)}...`
                                : item.description
                            }
                        </td>
                        <td>{item.quantity}</td>
                        {/* Provide a link to an "Edit" page with a button */}
                        <td>
                            <Link to={`/edit`}>
                                <Button
                                    // On button click, call the updateEntry function with item details
                                    onClick={() => updateEntry(
                                        item._id,
                                        item.itemName,
                                        item.description,
                                        item.quantity
                                    )}
                                    variant="info"
                                >
                                    Update
                                </Button>
                            </Link>
                        </td>
                        {/* Button to delete the item */}
                        <td>
                            <Button
                                // On button click, call the deleteEntry function with the item ID
                                onClick={() => deleteEntry(item._id)}
                                variant="danger"
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

            {/* Link to navigate to the "Create" page with a large warning button */}
            <Link className="d-grid gap-2" to="/create">
                <Button variant="warning" size="lg">
                    Create
                </Button>
            </Link>
        </div>
    );
}

// Export the Home component as the default export of this module
export default Home;
