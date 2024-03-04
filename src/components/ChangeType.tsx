import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    function change(): void {
        if (visible == "short_answer_question") {
            setVisible("multiple_choice_question");
        } else {
            setVisible("short_answer_question");
        }
    }
    const [visible, setVisible] = useState<QuestionType>(
        "short_answer_question"
    );
    return (
        <div>
            <Button onClick={change}>Change Type</Button>
            {visible == "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
        </div>
    );
}
