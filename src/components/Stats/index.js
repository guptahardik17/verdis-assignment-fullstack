import React from "react";
import "./style.css";


export default function Stats({ stack }) {
	return (
        <>
            <div data-testid="stack-stats">
                <h3>Stats:</h3>
            </div>

            <div className="stats">
                <p> Top Element: {stack.peek()} </p>
                <p> Stack Size: {stack.items.length} </p>
            </div>
        </>
	);
}