// Filename - Edit.js

// Import React and necessary dependencies
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Define the Edit component
function Edit() {
    // Set up state variables using useState
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams(); // Get id from the route params

    // State to hold inventory data and function to update it
    const [inventoryData, setInventoryData] = useState({});

    // Access the useNavigate hook for navigation
    const history = useNavigate();

    // useEffect hook to fetch inventory data when the component mounts
    useEffect(() => {
        const fetchInventoryData = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/items/${id}`);
                const data = await response.json();

                // Log the entire response
                console.log("Response:", response);

                // Set initial values from API data
                setName(data.itemName || "");
                setQuantity(data.quantity || "");
                setDescription(data.description || "");

                // Set the entire data object in the state
                setInventoryData(data);
            } catch (error) {
                console.error("Error fetching inventory data:", error);
            }
        };

        // Call the fetchInventoryData function when the component mounts
        fetchInventoryData();
    }, [id]);// Include id in the dependency array to fetch data when id changes

    const updateEntry = async (id) => {
        try {
            // Send a PUT request to update the item with the specified ID
            await fetch(`http://localhost:5001/api/items/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    itemName: name,
                    quantity: quantity,
                    description: description,
                }),
            });

            // Redirect to the main page after successful update
            history("/");
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    // Function for handling the edit and pushing changes
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if name, quantity, or description is empty
        if (name === "" || quantity === "" || description === "") {
            alert("Invalid input");
            return;
        }

        try {
            // Send a PUT request to update the item with the specified ID
            await updateEntry(id);
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    // Render the Edit component
    return (
        <div>
            {/* Create a form with name, quantity, and description input fields */}
            <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
                {/* Input field for Name */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter Name"
                    />
                </Form.Group>

                {/* Input field for Quantity */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        type="number"
                        placeholder="Quantity"
                    />
                </Form.Group>

                {/* Input field for Description */}
                <Form.Group className="mb-3" controlId="formBasicPlayer">
                    <Form.Control
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        placeholder="Description"
                    />
                </Form.Group>

                {/* Button to handle the update */}
                <Button
                    onClick={(e) => handleSubmit(e)}
                    variant="primary"
                    type="submit"
                    size="lg"
                >
                    Update
                </Button>

                {/* Button to redirect to the main page after editing */}
                <Link className="d-grid gap-2" to="/">
                    <Button variant="warning" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

// Export the Edit component as the default export
export default Edit;

// Ran out of time to figure out why ID coming back as undefined in API call