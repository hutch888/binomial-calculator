import React, { useState, useEffect } from "react";
//import { CSSTransition } from "react-transition-group";
import {
	ComponentTransition,
	AnimationTypes,
} from "react-component-transition";
import "../App.css";
import { FirstPassage } from "./Passage";
import { calculateBinomialPD, calculateCD } from "./MathFunctions";
import Form1 from "./Form1";
import Form2 from "./Form2";
import ChartBox from "./ChartBox";
import MathBox1 from "./MathBox1";
import Footer from "./Footer";

function App() {
	const [theta1, setTheta1] = useState(0);
	const [n1, setN1] = useState(0);
	const [data1IsValid, setData1IsValid] = useState(false);
	const [calculating, setCalculating] = useState(false);
	const [probabilityDistribution, setProbabilityDistribution] = useState(null);
	const [cumulativeDistribution, setCumulativeDistribution] = useState(null);
	const [distributionsAreValid, setDistributionsAreValid] = useState(false);
	const [showMath, setShowMath] = useState(false);

	useEffect(() => {
		console.log(
			`In App useEffect, data1IsValid = ${data1IsValid}, theta1=${theta1}, n1=${n1}`
		);
		if (data1IsValid) {
			calculate(theta1, n1);
		} else {
			setProbabilityDistribution(null);
			setCumulativeDistribution(null);
		}
	}, [data1IsValid, theta1, n1]);

	useEffect(() => {
		if (probabilityDistribution && cumulativeDistribution) {
			setDistributionsAreValid(true);
		} else {
			setDistributionsAreValid(false);
		}
	}, [probabilityDistribution, cumulativeDistribution]);

	const calculate = async (theta1, n1) => {
		setCalculating(true);

		let probDist = [];
		var cumDist = [];

		new Promise(function (resolve, reject) {
			probDist = calculateBinomialPD(theta1, n1);
			setProbabilityDistribution(probDist);
			resolve(probDist);
		})
			.then(function (result) {
				cumDist = calculateCD(result);
				setCumulativeDistribution(cumDist);
				return cumDist;
			})
			.catch(function (error) {
				console.log(error);
			});

		setCalculating(false);
	};

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
					//className="inBack"
				>
					{distributionsAreValid && data1IsValid ? (
						<ChartBox
							probabilityDistribution={probabilityDistribution}
							cumulativeDistribution={cumulativeDistribution}
							calculating={calculating}
						/>
					) : null}
				</ComponentTransition>
				<Form2 showMath={showMath} setShowMath={setShowMath} />
				<ComponentTransition
					enterAnimation={AnimationTypes.slideRight.enter}
					exitAnimation={AnimationTypes.slideLeft.exit}
					animateContainerDuration={500}
				>
					{showMath ? <MathBox1 /> : null}
				</ComponentTransition>
			</div>
			<Footer />
		</div>
	);
}

export default App;
