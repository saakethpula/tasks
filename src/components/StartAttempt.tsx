import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [initial, setValue] = useState<number>(4);
    const [inProgress, setValue2] = useState<boolean>(false);
    function startButton(): void {
        setValue(initial - 1);
        setValue2(true);
    }
    function add(): void {
        setValue(initial + 1);
    }
    function stop(): void {
        setValue2(false);
    }
    return (
        <div>
            Attemps: {initial}
            <Button
                onClick={startButton}
                disabled={initial === 0 || inProgress === true}
            >
                Start Quiz
            </Button>
            <Button onClick={add} disabled={inProgress === true}>
                Mulligan
            </Button>
            <Button onClick={stop} disabled={inProgress === false}>
                Stop Quiz
            </Button>
        </div>
    );
}
