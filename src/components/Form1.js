import { event } from "jquery";
import React, { useState, useRef } from "react";
import "../App.css";
import convertTheta from "./InputConverter";

export default function Form1(props) {
	const { theta1, setTheta1, n1, setN1, data1IsValid, setData1IsValid } = props;
	const [thetaIsValid, setThetaIsValid] = useState(false);
	const [nIsValid, setNIsValid] = useState(false);
	const thetaRef = useRef();
	const nRef = useRef();

	const validate = (event) => {
		event.preventDefault();
		//Get the string values from the inputs
		const thetaString = thetaRef.current.value;
		const nString = nRef.current.value;

		//Convert string values to numbers
		let theta = convertTheta(thetaString);
		let n = parseInt(nString, 10);

		if (!isNaN(theta) && theta > 0 && theta < 1) {
			setThetaIsValid(true);
			setTheta1(theta);
		}
		if (!isNaN(n) && n > 0 && n < 51) {
			setNIsValid(true);
			setN1(n);
		}
		setData1IsValid(thetaIsValid && nIsValid);
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
					<label htmlFor="theta-1-input">
						<h5> &#952; = {}</h5>
					</label>
					<input type="text" name="theta-1-input" ref={thetaRef} />
					{thetaIsValid ? null : (
						<h5 className="text-danger">
							&theta; should be a decimal between 0 and 1.
						</h5>
					)}
				</div>
				<div className="input-box">
					<h5> Let n = the number of times you attempt the activity.</h5>
					<label htmlFor="n-input">
						<h5> n = {}</h5>
					</label>
					<input type="number" name="n-input" ref={nRef} />
					{thetaIsValid ? null : (
						<h5 className="text-danger">
							n should be a positive integer less than 51.
						</h5>
					)}
				</div>
				<div className="button-row">
					<input
						type="submit"
						className="btn btn-secondary left-button"
						value="Submit"
					/>
					<button className="btn btn-secondary right-button" onClick={clear}>
						Clear
					</button>
				</div>
			</form>
		</div>
	);
}
