import React from "react";

import BarChart from "./BarChart";
//import Table from "./Table";
import { PDCaption, CDCaption } from "./Passage";

export default function ChartBox({
	probabilityDistribution,
	cumulativeDistribution,
	calculating,
}) {
	if (calculating) {
		return <h5>calculating...</h5>;
	}

	return (
		<div className="chart-box">
			<BarChart
				title={"Probability Distribution"}
				yValues={probabilityDistribution}
			/>
			<PDCaption />
			<BarChart
				title={"Cumulative Distribution"}
				yValues={cumulativeDistribution}
			/>
			<CDCaption />
			{/* 			<Table
				title={`Binomial Probabilites for n = ${n} and &theta = ${theta}`}
      /> */}
		</div>
	);
}
