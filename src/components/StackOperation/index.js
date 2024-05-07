import React from "react";
import "./style.css";
import Stack from "../../utilities/Stack";
import { useState } from 'react';
import { message } from 'antd';

export default function StackOperation({ stack, setStack }) {
    const [value, setValue] = useState('');

    const onChangeValue = (e) => {
		setValue(e.target.value);
	};

    const handlePush = () => {
        if (stack.isFull()) {
            message.error("Stack is full upto the configured limit!", 1);
            return;
        }

		if (!value) {
			return;
		}

		setValue('');
		stack.push(value);

        message.success(value + " pushed to stack", 1);
		setStack(new Stack([...stack.items]));
	};

	const handlePop = () => {
        if (stack.isEmpty()) {
            message.error("Stack is Empty!", 1);
            return;
        }
        
		const poppedElement = stack.pop();
        message.success(poppedElement + " is popped", 1);

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