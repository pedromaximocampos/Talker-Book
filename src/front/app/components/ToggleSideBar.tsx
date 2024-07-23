import React, { useState } from 'react';
import { FiPlus, FiLifeBuoy, FiSettings, FiMonitor, FiLogOut, FiMenu, FiChevronLeft, FiHome, FiInfo, FiSearch } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import Link from 'next/link';

interface SidebarItemProps {
    id: string;
    icon: IconType;
    text: string;
    onClick: () => void;
    isSelected: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ id, icon: Icon, text, onClick, isSelected }) => (
    <Link href={`/${id}`} passHref>
        <div
            id={id}
            className={`cursor-pointer flex items-center ${isSelected ? 'bg-white text-blue-950' : ''} rounded px-6 py-4`}
            onClick={onClick}
        >
            {Icon && <div className="mr-2"><Icon /></div>}
            <span>{text}</span>
        </div>
    </Link>
);

const Sidebar: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            {/* Navigation Bar */}
            <nav className="fixed mb-10 inset-x-0 top-0 bg-blue-950 text-white w-full flex flex-row items-center justify-center p-4">
                <h1 className="text-2xl font-black">TalkerBook</h1>
            </nav>

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out bg-blue-950 text-white min-w-60 flex flex-col items-start`}>
                <div className="flex justify-between items-center w-full p-4">
                    <button
                        className="focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        <FiChevronLeft size={48} />
                    </button>
                </div>
                <SidebarItem
                    id="uploadLivros"
                    icon={FiPlus}
                    text="Criar Livro"
                    onClick={() => setSelectedItem('addItem')}
                    isSelected={selectedItem === 'addItem'}
                />
                <SidebarItem
                    id="pesquisa"
                    icon={FiSearch}
                    text="Pesquisar"
                    onClick={() => setSelectedItem('Pesquisar')}
                    isSelected={selectedItem === 'Pesquisar'}
                />
                <SidebarItem
                    id="home"
                    icon={FiHome}
                    text="Home"
                    onClick={() => setSelectedItem('Home')}
                    isSelected={selectedItem === 'Home'}
                />
                <SidebarItem
                    id=""
                    icon={FiLogOut}
                    text="Sair"
                    onClick={() => setSelectedItem('Sair')}
                    isSelected={selectedItem === 'Sair'}
                />
            </div>
            <button
                className={`p-4 focus:outline-none fixed top-0 left-0 ${isOpen ? 'hidden' : 'block'}`}
                onClick={toggleSidebar}
            >
                <FiMenu size={48} className="text-white bg-blue-950 p-2 rounded" />
            </button>
        </div>
    );
};

export default Sidebar;

