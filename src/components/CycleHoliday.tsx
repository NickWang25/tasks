import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas:🎄"
    | "July 4th: 🎆"
    | "Halloween: 🎃"
    | "Lunar New Year: 🏮"
    | "New Years Day: 🎉";

const holidayAlphabetically: Record<Holiday, Holiday> = {
    "Christmas:🎄": "Halloween: 🎃",
    "July 4th: 🎆": "Lunar New Year: 🏮",
    "Halloween: 🎃": "July 4th: 🎆",
    "Lunar New Year: 🏮": "New Years Day: 🎉",
    "New Years Day: 🎉": "Christmas:🎄",
};

const holidayByYear: Record<Holiday, Holiday> = {
    "New Years Day: 🎉": "Lunar New Year: 🏮",
    "Lunar New Year: 🏮": "July 4th: 🎆",
    "July 4th: 🎆": "Halloween: 🎃",
    "Halloween: 🎃": "Christmas:🎄",
    "Christmas:🎄": "New Years Day: 🎉",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas:🎄");

    const advanceByAlphabet = (): void => {
        setHoliday(holidayAlphabetically[holiday]);
    };

    const advanceByYear = (): void => {
        setHoliday(holidayByYear[holiday]);
    };

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
