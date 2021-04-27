import React from 'react';
import {calculateBinomialPD, calculateCD} from './MathFunctions';
import BarChart from './BarChart';
import Table from './Table';
import {PDCaption, CDCaption} from './Passage';

export default ChartBox({theta, n}) = {
  const probabilityDistribution = calculateBinomialPD(theta, n);
  const cumulativeDistribution = calculateCD(probabilityDistribution);
  const mean = theta*n;
  const variance = theta*n*(1-theta);

  return (
    <div className="chart-box">
      <BarChart
        title={'Probability Distribution'}
        caption={PDCaption}
        yValues={probabilityDistribution}
      />
      <BarChart
        title={'Cumulative Distribution'}
        caption={CDCaption}
        yValues={cumulativeDistribution}
      />
      <Table
        title={`Binomial Probabilites for n = ${n} and &theta = ${theta}`}

      </div>
    </div>
  )
};