import React from "react";

const FirstPassage = () => {
	return (
		<div className="passage" id="first-passage">
			<h5>Think of any activity that has two possible outcomes.</h5>

			<p style={{ textAlign: "center" }}>
				If you flip a coin, it will come up heads or tails.
			</p>
			<p style={{ textAlign: "center" }}>
				If you play a game of poker, you will win or lose.
			</p>
			<p style={{ textAlign: "center" }}>
				If you go fishing, you will catch a fish or you won't.
			</p>

			<h5>
				For the particular activity you have in mind, choose one of the outcomes
				and call it a "success".
			</h5>
		</div>
	);
};

const PDCaption = () => {
	return (
		<h5 className="caption">
			The numbers along the horizontal axis are the possible number of
			successes. The bar above each number represents the probability of getting
			that number of successes.
		</h5>
	);
};

const CDCaption = () => {
	return (
		<h5 className="caption">
			The numbers along the horizontal axis are the possible number of
			successes. The bar above each number represents the probability of getting
			that number <b>or fewer</b> successes.
		</h5>
	);
};

const ChartBoxCaption = () => {
	return (
		<h4 className="caption chart-box-caption">
			Hover over or click on a bar to see its numerical value.
		</h4>
	);
};
export { FirstPassage, PDCaption, CDCaption, ChartBoxCaption };
