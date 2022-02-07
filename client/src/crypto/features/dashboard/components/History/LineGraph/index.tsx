import React from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';

interface GraphProps {
  transactions: {
    timestamps: string[];
    amounts: number[];
  };
}

const LineGraph: React.FC<GraphProps> = ({ transactions }) => {
  Chart.register(CategoryScale);

  const data = {
    labels: transactions.timestamps,
    datasets: [
      {
        label: 'Jobcoin balance',
        data: transactions.amounts,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return <Line data={data} />;
};

export default LineGraph;
