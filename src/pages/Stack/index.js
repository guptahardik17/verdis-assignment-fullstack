import React from "react";
import Stack from "../../utilities/Stack";
import "./style.css";
import { useState } from 'react';
import StackVisual from "../../components/StackVisual";
import Stats from "../../components/Stats";
import StackOperation from "../../components/StackOperation";

export default function StackComponent() {
	const [stack, setStack] = useState(new Stack());

	return (
		<>
			<div className="container">
				<h1 className="title">Stack Visualizer</h1>
			</div>
			<div className="container">
				<div className="inner-container">
					<StackVisual stack={stack}/>
				</div>

				<div className="inner-container">
					<StackOperation stack={stack} setStack={setStack}/>
					<Stats stack={stack}/>
				</div>
			</div>
		</>
	);
}