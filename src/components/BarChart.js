import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart({ yValues, title }) {
	const [data, setData] = useState({});
	const xValues = [];
	for (let i = 0; i <= yValues.length + 1; i++) {
		xValues[i] = i;
	}

	useEffect(() => {
		setData({
			labels: [0, 1, 2, 3],
			dataSets: [
				{
					label: "Probability of x successes",
					backgroundColor: "rgba(75,192,192,1)",
					borderWidth: 2,
					data: yValues,
				},
			],
		});
	}, []);

	return (
		<div>
			<Bar
				data={data}
				options={{
					title: {
						display: true,
						text: title,
						fontSize: 20,
					},
				}}
			/>
		</div>
	);
}
