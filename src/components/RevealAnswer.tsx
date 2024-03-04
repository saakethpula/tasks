import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    function reveal(): void {
        setVisible(!visible);
    }
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            <Button onClick={reveal}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
