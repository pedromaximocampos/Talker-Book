import React, { useState } from 'react';
import Modal from 'react-modal';
import ReportDetails from './ReportCard';
import { FaCheckCircle } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import Button from '../Button';

interface Report {
  id: number;
  bookTitle: string;
  reporter: string;
  justification: string;
  date: string;
}

interface ReportListProps {
  reports: {
    id: number;
    bookTitle: string;
    reporter: string;
    justification: string;
    date: string;
  }[];
  onSelect: (id: number) => void;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const ReportList: React.FC<ReportListProps> = ({ reports }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  const openModal = (report: Report) => {
    setSelectedReport(report);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <ul>
        {reports.map((report) => (
          <li key={report.id} className="cursor-pointer bg-gray-100 text-2xlfont-bold rounded-md p-4 m-2" onClick={() => openModal(report)}>
            {report.bookTitle} 
          </li>
        ))}
      </ul>

      {selectedReport && <ReportDetails report={selectedReport} closeModal={closeModal} />}
    </div>


  );
};

export default ReportList;
