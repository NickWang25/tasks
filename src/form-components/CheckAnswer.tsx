import React, { useState } from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    const changeAnswer = (curAnswer: string): void => {
        setAnswer(curAnswer);
    };

    return (
        <div>
            <FormGroup controlId="formCheckAnswer">
                <FormLabel>Check Answer</FormLabel>
                <FormControl
                    value={answer}
                    onChange={(v) => {
                        changeAnswer(v.target.value);
                    }}
                />
                <p>{answer === expectedAnswer ? "✔️" : "❌"}</p>
            </FormGroup>
        </div>
    );
}
