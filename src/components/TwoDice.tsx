import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftdie, setLeft] = useState<number>(5);
    const [rightdie, setRight] = useState<number>(1);
    function rollLeft() {
        setLeft(d6());
    }
    function rollRight() {
        setRight(d6());
    }
    function checkWin() {
        if (leftdie == 1 && rightdie == 1) {
            return "Lose";
        } else if (leftdie === rightdie) {
            return "Win";
        } else {
            return null;
        }
    }
    return (
        <div>
            <span data-testid="left-die">
                <Button onClick={rollLeft}>Roll Left Die</Button>
                {leftdie}
            </span>
            <span data-testid="right-die">
                <Button onClick={rollRight}>Roll Right Die</Button>
                {rightdie}
            </span>
            <p>{checkWin()}</p>
        </div>
    );
}
