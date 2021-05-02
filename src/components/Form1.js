//import { event } from "jquery";
import React, { useState, useRef } from "react";
import "../App.css";
import convertTheta from "./InputConverter";

export default function Form1(props) {
	const { setTheta1, setN1, setData1IsValid } = props;
	//Refs to the inputs
	const thetaRef = useRef();
	const nRef = useRef();
	const [thetaIsValid, setThetaIsValid] = useState(false);
	const [nIsValid, setNIsValid] = useState(false);

	const validate = (event) => {
		event.preventDefault();
		//Get the string values from the inputs
		const thetaString = thetaRef.current.value;
		const nString = nRef.current.value;
		let localThetaValidFlag = false;
		let localNValidFlag = false;
		//Convert string values to numbers
		let theta = convertTheta(thetaString);
		let n = parseInt(nString, 10);
		console.log(`In Form1, theta = ${theta} n = ${n}`);

		if (!isNaN(theta) && theta > 0 && theta < 1) {
			setThetaIsValid(true);
			localThetaValidFlag = true;
			setTheta1(theta);
		} else {
			setThetaIsValid(false);
			localThetaValidFlag = false;
			setTheta1(theta);
		}

		if (!isNaN(n) && n > 0 && n < 51) {
			setNIsValid(true);
			localNValidFlag = true;
			setN1(n);
		} else {
			setNIsValid(false);
			localNValidFlag = false;
			setN1(n);
		}
		setData1IsValid(localThetaValidFlag && localNValidFlag);
		console.log(
			`In Form1, thetaIsValid = ${thetaIsValid} nIsValid = ${nIsValid} localThetaValidFlag && localNValidFlag = ${
				localThetaValidFlag && localNValidFlag
			}`
		);
	};

	const clear = (event) => {
		setThetaIsValid(false);
		setNIsValid(false);
		setData1IsValid(false);
		setTheta1(0);
		setN1(0);
		thetaRef.current.value = "";
		nRef.current.value = "";
	};

	return (
		<div>
			<form
				className="form-group border border-secondary rounded"
				onSubmit={validate}
			>
				<div className="input-box">
					<h5> Let &theta; = the probability of success for one attempt.</h5>
					<label htmlFor="theta1Input">
						<h5> &#952; = {}</h5>
					</label>
					<input type="text" name="theta1Input" ref={thetaRef} />
					{thetaIsValid ? null : (
						<h5 className="text-danger">
							&theta; should be a fraction or a decimal between 0 and 1.
						</h5>
					)}
				</div>
				<div className="input-box">
					<h5> Let n = the number of times you attempt the activity.</h5>
					<label htmlFor="n-input">
						<h5> n = {}</h5>
					</label>
					<input type="number" name="n-input" ref={nRef} />
					{nIsValid ? null : (
						<h5 className="text-danger">
							n should be a positive integer less than 51.
						</h5>
					)}
				</div>
				<div className="button-row">
					<input
						type="submit"
						className="btn btn-secondary left-button"
						value="Enter"
					/>
					<button className="btn btn-secondary right-button" onClick={clear}>
						Clear
					</button>
				</div>
			</form>
		</div>
	);
}
