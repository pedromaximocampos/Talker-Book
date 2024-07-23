import React from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

interface ChartComponentProps {
  type: 'bar' | 'line' | 'pie' | 'doughnut';
  data: any;
  options?: any;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ type, data, options }) => {
  const chartTypes: any = {
    bar: Bar,
    line: Line,
    pie: Pie,
    doughnut: Doughnut,
  };

  const ChartType = chartTypes[type];

  return <ChartType data={data} options={options} />

};

export default ChartComponent;
