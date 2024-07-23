import React from 'react';
import { FaSort, FaTimes } from 'react-icons/fa';
import Input from '@/app/components/Input'
import Button from '../components/Button';
import { FiFilter } from 'react-icons/fi';
import { FaX } from 'react-icons/fa6';

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
}


const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {

    if(!isOpen)
    return(null);

    return (
        < div className="fixed inset-0 z-50 flex items-center justify-center" >
        <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
            <div className="bg-white p-5 w-4/12 rounded-2xl shadow-lg z-15 relative">
                <div className="flex justify-between items-center mb-4">
                    <div className=" justify-self-start">
                        <div className={`text-xl text-blue-900 bg-blue-300 rounded-full p-2`} style={{ boxShadow: '0 0 0 8px #538eed' }}><FiFilter /></div>
                    </div>
                    <h2 className="text-lg font-bold">Filtros</h2>
                    <button onClick={onClose} className="text-gray-500">
                        <FaX />
                    </button>
                </div>
                <div className='m-2 pt-5 justify-center'>
                    <Input id='nome' label='Nome' type="text" />

                    <Input id='isbn' label='ISBN' type="text" />

                    <Input id='categoria' label='Categoria' type="text" />

                    <Input id='autor' label='Autor' type="text" />

                    <Button label='Aplicar Filtros' color='lightBlue' onClick={onClose} />
                </div>
            </div>
        </div >

    );
};

export default FilterModal;
