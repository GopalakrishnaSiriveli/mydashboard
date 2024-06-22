import React from 'react';
import { Bar } from 'react-chartjs-2';
import { data } from '../data/mockData';

const BarChart = () => {
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
