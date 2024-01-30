// Import necessary dependencies
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";

// Backend connection
const backend = 'http://localhost:5001/api/items';

function CreateItemForm() {
    // State variables to store item details
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");

    // UseNavigate hook to enable navigation within the application
    const history = useNavigate();

    // Function to handle item creation form submission
    const handleCreateItem = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to your backend API endpoint to create a new item
            const response = await axios.post(backend, {
                itemName,
                description,
                quantity,
            });

            console.log('Response from backend:', response);

            // Assuming your backend returns a success status (e.g., 201) when item is created
            if (response.status === 201) {
                // Optionally, you can do something after successful item creation
                console.log('Item created successfully');
                history("/");
            }
        } catch (error) {
            // Handle errors
            console.error("Error during item creation:", error);
            alert("An error occurred during item creation. Please try again later.");
        }
    };

    // Render the create item component
    return (
        <div>
            <Form onSubmit={handleCreateItem} className="d-grid gap-2" style={{ margin: "5rem" }}>
                {/* Input field for item name */}
                <Form.Group className="mb-3" controlId="formBasicItemName">
                    <Form.Control
                        type="text"
                        placeholder="Enter Item Name"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                    />
                </Form.Group>

                {/* Input field for item description */}
                <Form.Group className="mb-3" controlId="formBasicItemDescription">
                    <Form.Control
                        type="text"
                        placeholder="Enter Item Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </Form.Group>

                {/* Input field for item quantity */}
                <Form.Group className="mb-3" controlId="formBasicItemQuantity">
                    <Form.Control
                        type="number"
                        placeholder="Enter Item Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                </Form.Group>

                {/* Button to submit the create item form */}
                <Button variant="primary" type="submit">
                    Create Item
                </Button>
            </Form>
        </div>
    );
}

export default CreateItemForm;
