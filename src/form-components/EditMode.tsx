import React, { useState } from "react";
import { FormGroup, FormControl, FormCheck } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function changeEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function changeIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    const setName = (name: string): void => {
        setUserName(name);
    };
    return (
        <div>
            <h3>Edit Mode</h3>
            <p>
                {userName} is {isStudent ? " a student" : " not a student"}
            </p>
            <FormGroup controlId="formEditMode">
                <FormCheck
                    type="switch"
                    id="is-edit-mode"
                    label="edit mode"
                    checked={editMode}
                    onChange={changeEditMode}
                />
                {editMode && (
                    <div>
                        <FormControl
                            value={userName}
                            type="text"
                            onChange={(n) => {
                                setName(n.target.value);
                            }}
                        />

                        <FormCheck
                            type="checkbox"
                            id="is-student-check"
                            label="Is a student?"
                            checked={isStudent}
                            onChange={changeIsStudent}
                        />
                    </div>
                )}
            </FormGroup>
        </div>
    );
}
