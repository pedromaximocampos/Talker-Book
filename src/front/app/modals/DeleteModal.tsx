import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

interface Modal {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
}

const ErrorModal: React.FC<Modal> = ({ isOpen, onClose, onDelete }) => {

    if (!isOpen) {
        return null;
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
            <div className="bg-white p-5 w-4/12 rounded-2xl shadow-lg z-15 relative">
                <div className='grid grid-cols-2 items-start'>
                    <div className=" justify-self-start">
                        <div className={`text-xl text-red-600 bg-red-300 rounded-full p-2`} style={{ boxShadow: '0 0 0 8px #f8d6d6' }}><FaTrashAlt /></div>
                    </div>
                    <div className=' mt-2 justify-self-end'>
                        <FaX onClick={onClose} color='gray' />
                    </div>
                </div>
                <div className="text-start mt-4">
                    <h2 className="font-extrabold text-xl">Deletar Livro</h2>
                    <p>Tem certeza que deseja apagar este livro?</p>
                </div>
                <div className="flex justify-end  mt-5">
                    <div className='grid grid-cols-2 items-end ml-2'>
                        <div className='ml-2'>
                            <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded-lg ">Deletar</button>
                        </div>
                        <div><button onClick={onClose} className="bg-blue-950 text-white px-4 py-2 rounded-lg">Cancelar</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorModal;