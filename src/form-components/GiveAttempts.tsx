import React, { useState } from "react";
import { FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    //Sets the amount of attempts to add each time
    const [numAttempts, setNumAttempts] = useState<number>(0);
    const changeNumAttempts = (n: number): void => {
        setNumAttempts(n);
    };

    //Changes the amount of total attempts by whatever is in numAttempts
    const [totAmount, setTotAmount] = useState<number>(3);
    const addAttempts = (n: number): void => {
        setTotAmount(n + totAmount);
    };

    return (
        <div>
            <FormGroup controlId="formGiveAnswer">
                <FormLabel>Give Attempts</FormLabel>
                <h1>Number: {totAmount}</h1>
                <FormControl
                    value={numAttempts}
                    type="number"
                    onChange={(n) => {
                        const value = parseInt(n.target.value);
                        if (value >= 0 && !isNaN(value)) {
                            changeNumAttempts(parseInt(n.target.value));
                        }
                    }}
                />
                <Button
                    onClick={() => {
                        addAttempts(-1);
                    }}
                    disabled={totAmount === 0}
                >
                    Use
                </Button>
                <Button
                    onClick={() => {
                        addAttempts(numAttempts);
                    }}
                >
                    Gain
                </Button>
            </FormGroup>
        </div>
    );
}
