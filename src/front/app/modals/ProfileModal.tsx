import React, { useState } from 'react';
import { FaDropbox, FaX } from 'react-icons/fa6';
import Button from '../components/Button';
import Input from '../components/Input';
import { StaticImageData } from 'next/image';
import { RxAvatar } from "react-icons/rx";

interface ModalProps {
    isOpen: boolean;
    image: StaticImageData | string;
    name: string;
    email: string;
    onClose: () => void;
}

const ProfileModal: React.FC<ModalProps> = ({ image, name, email, isOpen, onClose }) => {


    const [newEmail, setNewEmail] = useState(email);
    const [newName, setNewName] = useState(name);
    const [profilePhoto, setProfilePhoto] = useState<string | StaticImageData | undefined>(image);

    if (!isOpen) {
        return null;
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewEmail(e.target.value);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfilePhoto(e.target.value);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}>

            </div>
            <div className="bg-white p-5 w-8/12 rounded-2xl shadow-lg z-15 relative">

                <div className='grid grid-cols-2'>
                    <div className='grid grid-cols-1 items-start mt-2'>
                        <label className='font-bold text-xl'>Edite seu perfil</label>
                        <label className='text-md'>Coloque seu nome, email e a foto que desejar</label>
                    </div>
                    <div className=' mt-2 justify-self-end'>
                        <button className='flex justify-self-end' onClick={onClose}><FaX /></button>
                    </div>
                </div>
                <div className='grid grid-cols-2 itemrs-stat w-1/4 mt-5 mb-5 align-center '>
                    {typeof image === 'string' && image != null ? (
                        <img src={image} alt="Profile" className="w-20 h-20 rounded-full border-s-blue-950 border-1 border-blue-900" />
                    ) : (
                        <div className="w-15 h-15 rounded-full overflow-hidden">
                            <RxAvatar size={60} />
                        </div>
                    )}
                    <label htmlFor="profilePhoto" className="border-2 border-blue-950 cursor-pointer flex items-center justify-around px-4 py-2 rounded-lg text-blue-950 w-36 ">
                        <FaDropbox />
                        Upload foto
                    </label>
                </div>


                <Input
                    type="text"
                    value={newName}
                    onChange={handleNameChange}
                    placeholder={'Digite seu nome'}
                    label='Nome'
                    id={'name'}
                />
                <Input
                    type="email"
                    value={newEmail}
                    onChange={handleEmailChange}
                    placeholder={'Digite seu email'}
                    label='Email'
                    id={'email'}
                />

                <div className='mb-3 mt-12 '>
                    <Button color='blue' onClick={() => { }} label="Salvar Alterações" />
                </div>

                <Button onClick={() => { }} color='red' label="Cancelar" />

            </div>
        </div>
    );
}

export default ProfileModal;