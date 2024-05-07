import React from "react";
import "./style.css";


export default function StackVisual({ stack }) {
	return (
        <>
            <div className="stack" data-testid="stack-visual">
                { stack.items.toReversed().map((item, index) => (
                    <div key={index} className="stack-item">
                        {item}
                    </div>
                )) }
            </div>
            <div>
                <h2> Stack </h2>
            </div>
        </>
	);
}