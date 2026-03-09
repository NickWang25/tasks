import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    const startQuiz = (): void => {
        if (!progress && numAttempts !== 0) {
            setProgress(true);
            setNumAttempts(numAttempts - 1);
        }
    };

    const stopQuiz = (): void => {
        if (progress) {
            setProgress(false);
        }
    };

    const mulligan = (): void => {
        if (!progress) {
            setNumAttempts((n) => n + 1);
        }
    };

    return (
        <div>
            <p>Attempts: {numAttempts}</p>

            <Button
                onClick={startQuiz}
                disabled={progress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
