import React from "react";

const FirstPassage = () => {
	return (
		<div className="passage">
			<h5>Think of any activity that has two possible outcomes.</h5>

			<p>If you flip a coin, it will come up heads or tails.</p>
			<p>If you play a game of poker, you will win or lose.</p>
			<p>If you go fishing, you will catch a fish or you won't.</p>

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

export { FirstPassage, PDCaption, CDCaption };
