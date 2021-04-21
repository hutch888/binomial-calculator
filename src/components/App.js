import React, { useState } from "react";
import "../App.css";
import { FirstPassage } from "./Passage";
import Form1 from "./Form1";

function App() {
	const [theta1, setTheta1] = useState(0);
	const [n1, setN1] = useState(0);
	const [data1IsValid, setData1IsValid] = useState(false);
	const [dropdown1IsOpen, setDropdown1IsOpen] = useState(false);

	console.log(theta1, "  ", n1, "  ", data1IsValid);

	return (
		<div className="App">
			<div className=" container app-container">
				<h1>Binomial Probability Calculator</h1>
				<FirstPassage />
				<br />
				<Form1
					theta1={theta1}
					setTheta1={setTheta1}
					n1={n1}
					setN1={setN1}
					data1IsValid={data1IsValid}
					setData1IsValid={setData1IsValid}
				/>
			</div>
		</div>
	);
}

export default App;
