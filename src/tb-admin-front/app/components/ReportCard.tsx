import React from 'react';
import Button from './Button';

interface Report {
  id: number;
  bookTitle: string;
  reporter: string;
  justification: string;
  date: string;
}

const ReportCard: React.FC<Report> = (report) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-extrabold flex justify-center mb-2">{report.bookTitle}</h3>
      <p><strong>Reportado por:</strong> {report.reporter}</p>
      <p><strong>Data:</strong> {report.date}</p>
      <p><strong>Justificativa:</strong> {report.justification}</p>               
    </div>
  );
};

export default ReportCard;
