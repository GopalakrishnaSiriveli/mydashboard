import React from 'react';
import { Line } from 'react-chartjs-2';
import { data } from '../data/mockData';

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
