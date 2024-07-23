"use client";
import React, { useState } from 'react';
import ChartComponent from '../components/Chart';
import { mockData } from './data';
import protectedPage from '../protectedPage/page';

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const totalPages = Math.ceil(Object.keys(mockData).length / itemsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderCharts = () => {
    const chartData = Object.entries(mockData).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    return chartData.map(([key, data], index) => (
      <div key={index} className="mb-8 w-full flex justify-center">
        <div className="max-w-5xl w-full">
          <h2 className="text-xl font-bold mb-4">{key.replace(/([A-Z])/g, ' $1').trim()}</h2>
          <ChartComponent type={index % 2 === 0 ? 'bar' : 'line'} data={data} />
        </div>
      </div>
    ));
  };

  protectedPage();
  return (
    <div className="p-6 text-center text-blue-900 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Dashboard de Indicadores de Desempenho</h1>
      {renderCharts()}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
