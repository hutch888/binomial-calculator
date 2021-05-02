import React from "react";
import BarChart from "./BarChart";
//import Table from "./Table";
import { PDCaption, CDCaption, ChartBoxCaption } from "./Passage";

export default function ChartBox({
	probabilityDistribution,
	cumulativeDistribution,
	calculating,
}) {
	if (calculating) {
		return <h5>calculating...</h5>;
	}

	return (
		<div className="chart-box border border-secondary rounded">
			<div className="row">
				<div className="col-md-6">
					<BarChart
						title={"Probability Distribution"}
						yValues={probabilityDistribution}
					/>
					<PDCaption />
				</div>
				<div className="col-md-6">
					<BarChart
						title={"Cumulative Distribution"}
						yValues={cumulativeDistribution}
					/>
					<CDCaption />
				</div>
				<br />
			</div>
			<div className="row">
				<div className="w-50 mx-auto">
					<ChartBoxCaption />
				</div>
			</div>
		</div>
	);
}
