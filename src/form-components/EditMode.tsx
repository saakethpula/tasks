import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);
    function changedSwitch(): void {
        setEditMode(!editMode);
    }
    function nameChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }
    function studentCheck(): void {
        setIsStudent(!isStudent);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-switch"
                label={editMode ? "Edit Mode" : "Read Mode"}
                checked={editMode}
                onChange={changedSwitch}
            />
            {editMode ? (
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={nameChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formStudent">
                        <Form.Check
                            type="checkbox"
                            label="Is a student"
                            checked={isStudent}
                            onChange={studentCheck}
                        />
                    </Form.Group>
                </Form>
            ) : (
                <p>
                    {" "}
                    {name} is {isStudent ? "" : "not"} a student
                </p>
            )}
        </div>
    );
}
