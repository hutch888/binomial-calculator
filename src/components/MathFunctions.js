//Generate an array containing the binomial coefficients in row n of Pascal's triangle.
function pascalsTriangleRow(n) {
	let coeffs = [];
	coeffs[0] = 1;
	coeffs[n] = 1;

	if (n % 2) {
		//If n is odd, then the row has an even number of terms.
		for (let k = 1; k <= n / 2; k++) {
			coeffs[k] = (coeffs[k - 1] * (n + 1 - k)) / k;
			coeffs[n - k] = coeffs[k];
		}
	} else {
		//If n is even, then the row has an odd number of terms.
		for (let k = 1; k < n / 2; k++) {
			coeffs[k] = (coeffs[k - 1] * (n + 1 - k)) / k;
			coeffs[n - k] = coeffs[k];
		}
		coeffs[n / 2] = (coeffs[n / 2 - 1] * (n / 2 + 1)) / (n / 2);
	}
	return coeffs;
}

//Given theta=prob of success, and n=number of trials, create an array containing the binomial probailities of i succeses in n trials.
function calculateBinomialPD(theta, n) {
	let probabilityDistribution = []; //probabilityDistribution[i] = probability of i successes out of n trials.
	const binomialCoefficients = pascalsTriangleRow(n);

	for (let i = 0; i <= n; i++) {
		probabilityDistribution[i] =
			binomialCoefficients[i] * theta ** i * (1 - theta) ** (n - i);
	}

	return probabilityDistribution;
}

//Given an array containing a probaility distribution, create a same-sized array containing the cumulative distribution.
function calculateCD(probDist) {
	//ProbDist is a probability distribution. This function returns the cumulative distribution.
	let cumulativeDistribution = [];
	probDist.reduce(
		(prevVal, curVal, index) =>
			(cumulativeDistribution[index] = prevVal + curVal),
		0
	);
	return cumulativeDistribution;
}

export { calculateBinomialPD, calculateCD };
