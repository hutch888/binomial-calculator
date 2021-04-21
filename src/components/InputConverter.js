export default function convertTheta(thetaString) {
	let theta;

	if (thetaString.indexOf("/") > -1) {
		const thetaParts = thetaString.split("/");
		theta = parseInt(thetaParts[0], 10) / parseInt(thetaParts[1], 10);
	} else {
		theta = parseFloat(thetaString);
	}
	return theta;
}
