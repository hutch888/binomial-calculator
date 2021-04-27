import React, { useState, useEffect } from "react";
//import { CSSTransition } from "react-transition-group";
import {
	ComponentTransition,
	AnimationTypes,
} from "react-component-transition";
import "../App.css";
import { FirstPassage } from "./Passage";
import Form1 from "./Form1";

function App() {
	//const CSSTransitionGroup = addons.CSSTransitionGroup;
	//const TransitionGroup = React.addons.TransitionGroup;
	const [theta1, setTheta1] = useState(0);
	const [n1, setN1] = useState(0);
	const [data1IsValid, setData1IsValid] = useState(false);
	const [dropdown1IsOpen, setDropdown1IsOpen] = useState(false);

	let testVar = false;

	useEffect(() => {
		setDropdown1IsOpen(data1IsValid);
	}, ["data1IsValid"]);

	return (
		<div className="App">
			<div className=" container app-container">
				<h1>Binomial Probability Calculator</h1>
				<FirstPassage />
				<br />
				<Form1
					className="inFront"
					theta1={theta1}
					setTheta1={setTheta1}
					n1={n1}
					setN1={setN1}
					data1IsValid={data1IsValid}
					setData1IsValid={setData1IsValid}
				/>
				<ComponentTransition
					enterAnimation={AnimationTypes.slideLeft.enter}
					exitAnimation={AnimationTypes.slideRight.exit}
					animateContainerDuration={500}
					className="inBack"
				>
					{data1IsValid ? <ChartBox /> : null}
				</ComponentTransition>
				<h5 className="">{data1IsValid}</h5>
			</div>
		</div>
	);
}

export default App;
