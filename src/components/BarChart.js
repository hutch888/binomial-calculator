import React, { useState, useEffect } from "react";
import { Bar, Chart } from "react-chartjs-2";

export default function BarChart({ yValues, title }) {
	const xValues = [];

	for (let i = 0; i < yValues.length; i++) {
		xValues[i] = i;
	}

	const data = {
		labels: xValues,
		datasets: [
			{
				label: "Probability",
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(0,0,0,1)",
				borderWidth: 2,
				hoverBackgroundColor: "rgba(255,99,132,0.4)",
				hoverBorderColor: "rgba(255,99,132,1)",
				data: yValues,
			},
		],
	};

	Chart.defaults.color = "black";
	const options = {
		responive: true,
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: true,
				text: title,
				font: {
					size: 20,
				},
			},
		},
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};

	return (
		<div className="bar-chart">
			<Bar data={data} options={options} />
		</div>
	);
}
