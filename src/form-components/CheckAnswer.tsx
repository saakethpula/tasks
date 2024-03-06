import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userInput, setUserInput] = useState("");
    function updateInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setUserInput(event.target.value);
    }
    function checkAnswer() {
        if (userInput === expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }
    return (
        <div>
            <Form.Group controlId="formMovieName">
                <Form.Label>Input Answer:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={userInput}
                    onChange={updateInput}
                />
            </Form.Group>
            <div>Your answer is {checkAnswer()}.</div>
        </div>
    );
}
