import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const abcholidays = ["🎄", "🐣", "🍀", "❤️"];
    const dateholidays = ["❤️", "🍀", "🐣", "🎄"];
    const [string, setString] = useState<string>("🎄");
    function alphabetical(): void {
        const ind1 = abcholidays.indexOf(string);
        setString(abcholidays[ind1 + 1]);
    }
    function bydate(): void {
        const ind2 = dateholidays.indexOf(string);
        setString(dateholidays[ind2 + 1]);
    }
    return (
        <div>
            <Button onClick={alphabetical}> Advance by Alphabet</Button>
            <Button onClick={bydate}> Advance by Year</Button>
            Holiday: {string}
        </div>
    );
}
