import React, { useState } from 'react';
import { reportsData } from './data';
import ReportCard from '../components/ReportCard';
import NavBar from '../components/NavBar';
import protectedPage from '../protectedPage/page';


const ReportsPage: React.FC = () => {
  
  protectedPage();
  return (
    <div className='flex flex-col items-center min-h-screen bg-gradient-to-l from-blue-800 to-blue-950'>
    <NavBar src={"/logout.png"} alt={"Logout"} width={"w-6"}/>
      <div className="grid grid-cols-1 m-8 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {reportsData.map((report) => (
          <ReportCard key={report.id} id={report.id} bookTitle={report.bookTitle} reporter={report.reporter} justification={report.justification} date={report.date} />
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;


