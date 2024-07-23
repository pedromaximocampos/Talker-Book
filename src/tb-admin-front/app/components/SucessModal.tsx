import React from 'react';
import { FaX } from 'react-icons/fa6';
import Button from '../components/Button';
import { FaCheckCircle } from 'react-icons/fa';

interface Modal {
    isOpen: boolean;
    title: string;
    message: string;
    onClose: () => void;
}

const SuccessModal: React.FC<Modal> = ({ title, message, isOpen, onClose }) => {

    if (!isOpen) {
        return null;
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
            <div className="bg-white p-5 w-4/12 rounded-2xl shadow-lg z-15 relative">
                <div className='grid grid-cols-2 items-start'>
                <div className=" justify-self-start">
                        <div className={`text-xl text-green-600 bg-green-300 rounded-full p-2`} style={{ boxShadow: '0 0 0 8px #aaf1c0' }}><FaCheckCircle/></div>
                    </div>
                    <div className=' mt-2 justify-self-end'>
                        <FaX onClick={onClose} color='gray' />
                    </div>
                </div>
                <div className="text-start mt-4">
                    <h2 className="font-extrabold text-xl">{title}</h2>
                    <p>{message}</p>
                </div>
                <div className="flex justify-end  mt-5">
                    <Button color='green' label='Redirecionar' onClick={onClose} ></Button>
                </div>
            </div>
        </div>
    );
}

export default SuccessModal;