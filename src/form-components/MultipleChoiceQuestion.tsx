import React, { useState } from "react";
import { FormGroup, FormLabel, FormSelect } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [curOption, setCurOption] = useState<string>(options[0]);

    return (
        <div>
            <FormGroup controlId="MultipleChoiceQuestion">
                <FormLabel>Multiple Choice Question</FormLabel>
                <FormSelect
                    value={curOption}
                    onChange={(i) => {
                        setCurOption(i.target.value);
                    }}
                >
                    {options.map((o: string) => (
                        <option key={o}>{o}</option>
                    ))}
                </FormSelect>
            </FormGroup>
            <div>{curOption === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
