import React from "react";
import "./style.css";
import Stack from "../../utilities/Stack";
import { useState } from 'react';

export default function StackOperation({ stack, setStack }) {
    const [value, setValue] = useState('');

    const onChangeValue = (e) => {
		setValue(e.target.value);
	};

    const handlePush = () => {
		if (!value) {
			return;
		}

		setValue('');
		stack.push(value);
		setStack(new Stack([...stack.items]));
	};

	const handlePop = () => {
		stack.pop();
		setStack(new Stack([...stack.items]));
	};

	return (
        <>
            <div data-testid="stack-operation">
                <input
                    type="text"
                    className="input"
                    placeholder="Enter a value to push to the stack"
                    value={value}
                    onChange={onChangeValue}
                    onKeyDown={(e) => e.code === "Enter" && handlePush()}
                    autoFocus
                />
            </div>

            <div className="buttons">
                <button
                    className="button push-button"
                    onClick={handlePush}
                >
                    Push
                </button>
                <button
                    className="button pop-button"
                    onClick={handlePop}
                >
                    Pop
                </button>
            </div>
        </>
	);
}