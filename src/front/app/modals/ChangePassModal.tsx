import React from 'react'
import { FaLock, FaRoadLock, FaX } from 'react-icons/fa6';
import Input from '../components/Input';
import Button from '../components/Button';

interface ModalProps {
    isOpen: boolean;
    pass?: string;
    confirmPass?: string;
    onClose: () => void;
}

const ChangePassModal: React.FC<ModalProps> = ({ isOpen, pass, confirmPass, onClose }) => {

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-black bg-opacity-70  absolute inset-0" onClick={onClose}></div>
            <div className="bg-white p-5 w-1/3 rounded-2xl shadow-lg z-15 relative">
                <div className={`text-xl text-blue-950 bg-purple-400 rounded-full p-2 w-9  `} style={{ boxShadow: '0 0 0 8px #D6D6F8' }}><FaLock /></div>

                <div className='grid grid-cols-2 items-start mt-10 mb-5'>
                    <div className=" justify-self-start">
                        <label className='font-bold text-xl'>Alterar Senha</label>
                    </div>
                    <div className=' mt-2 justify-self-end'>
                        <FaX onClick={onClose} color='gray' />
                    </div>
                </div>
                <Input icon={<FaLock color='gray' />} placeholder='Digite sua nova senha' type='password' label={'Senha'} id={'pass'} value={pass as string} ></Input>
                <Input icon={<FaLock color='gray' />} placeholder='Confirme sua nova senha' type='password' label={'Digite a nova senha'} id={'confirmPass'} value={confirmPass as string} />

                <div className='mb-3 mt-12 '>
                    <Button color='blue' onClick={() => { }} label="Confirmar" />
                </div>

                <Button onClick={() => { }} label="Cancelar" />
            </div>
        </div>
    );
}

export default ChangePassModal