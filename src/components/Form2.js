import React from "react";
import "../App.css";

export default function Form2({ showMath, setShowMath }) {
	function toggleShowMath(event) {
		event.preventDefault();
		setShowMath(!showMath);
	}

	return (
		<form onSubmit={toggleShowMath}>
			<input
				type="submit"
				className="btn btn-secondary"
				value={showMath ? "Hide the math" : "Show me the math!"}
			/>
		</form>
	);
}
