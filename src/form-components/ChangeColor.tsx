import React, { useState } from "react";
import { FormGroup, FormCheck } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "pink",
        "orange",
        "purple",
        "cyan",
        "black",
    ];
    const [chosenColor, setChosenColor] = useState<string>("red");

    const updateChosenColor = (color: string): void => {
        setChosenColor(color);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <FormGroup controlId="ChangeColor">
                <ul>
                    {colors.map((color: string) => (
                        <li key={color}>
                            <FormCheck
                                inline
                                type="radio"
                                name="colors"
                                onChange={(c) => {
                                    updateChosenColor(c.target.value);
                                }}
                                id={`change-color-${color}`}
                                label={color}
                                value={color}
                                checked={chosenColor === color}
                            />
                        </li>
                    ))}
                </ul>
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: chosenColor }}
                >
                    <p>You have chosen {chosenColor}</p>
                </div>
            </FormGroup>
        </div>
    );
}
