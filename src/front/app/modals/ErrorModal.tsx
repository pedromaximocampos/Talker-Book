import React from 'react';
import { FaX } from 'react-icons/fa6';
import Button from '../components/Button';

interface Modal {
    isOpen: boolean;  
    title: string;
    message: string;
     onClose: () => void;
}

const ErrorModal: React.FC<Modal> = ({ title, message, isOpen, onClose }) => {

    if (!isOpen) {
        return null;
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
            <div className="bg-white p-5 w-4/12 rounded-2xl shadow-lg z-15 relative">
                <div className='grid grid-cols-2 items-start'>
                    <div className=" justify-self-start">
                        <div className={`text-xl text-red-600 bg-red-300 rounded-full p-2`} style={{ boxShadow: '0 0 0 8px #f8d6d6' }}><FaX/></div>
                    </div>
                    <div className=' mt-2 justify-self-end'>
                        <FaX onClick={onClose} color='gray' />
                    </div>
                </div>
                <div className="text-start mt-4">
                    <h2 className="font-extrabold text-xl">{title}</h2>
                    <h2 className="text-md">{message}</h2>
                </div>
                <div className="flex justify-end  mt-5">
                    <Button onClick={onClose}  color='red' label='Fechar'></Button>
                </div>
            </div>
        </div>
    );
}

export default ErrorModal;