import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [userInput, setUserInput] = useState("");
    const [attempts, setAttempts] = useState(3);

    function handleInputChange(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        setUserInput(event.target.value);
    }

    function handleUseClick(): void {
        setAttempts((prevAttempts) => prevAttempts - 1);
    }

    function handleGainClick(): void {
        const parsedInput = parseInt(userInput);
        if (!isNaN(parsedInput)) {
            setAttempts((prevAttempts) => prevAttempts + parsedInput);
        }
    }

    return (
        <div>
            <header>Give Attempts</header>
            <p>Attempts: {attempts}</p>
            <Form.Group controlId="formMovieName">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={userInput}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Button onClick={handleUseClick} disabled={attempts === 0}>
                Use
            </Button>
            <Button onClick={handleGainClick}>Gain</Button>
        </div>
    );
}
