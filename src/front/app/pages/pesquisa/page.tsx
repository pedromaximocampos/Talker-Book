"use client";
import React, { useState, useEffect } from "react";
import Pesquisa from "@/app/components/Pesquisa";
import Button from '@/app/components/Button';
import FilterModal from '@/app/modals/FilterModal';
import { FaSort } from 'react-icons/fa';
import { GoSortDesc, GoRows } from "react-icons/go";
import AlphabetNavigation from "@/app/components/AlphabetNavigation";
import ToggleSideBar from "@/app/components/ToggleSideBar";
import { FiFilter } from "react-icons/fi";
import Card from "@/app/components/Card"; 
import { fetchBooks } from "./data";
import { BookDTO } from "@/app/interfaces/Book";
import protectedPage from "../protectedPage/page";

const PesquisaPage: React.FC = () => {
    const [pesquisa, setPesquisa] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLetter, setSelectedLetter] = useState('');
    const [recommendedBooks, setRecommendedBooks] = useState<BookDTO[]>([]);

    useEffect(() => {
        const loadBooks = async () => {
            const books = await fetchBooks();
            setRecommendedBooks(books);
        };

        loadBooks();
    }, []);

    const handlePesquisaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPesquisa(event.target.value);
    };

    const handlePesquisaSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Pesquisa:", pesquisa);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handlePreencherClick = () => {
        // Lógica para preencher
    };

    const handleSelectLetter = (letter: string) => {
        setSelectedLetter(letter);
        console.log("Selected letter:", letter);
    };

    protectedPage();
    return (
        <div className="flex flex-col sm:flex-row h-screen">
            <ToggleSideBar />
            <div className="flex-1 mt-20 ml-3 mr-5">
                <div className="col col-span-2">
                    <div className="w-full flex flex-col sm:flex-row items-center">
                        <div className="flex w-full sm:w-3/4">
                            <Pesquisa />
                        </div>
                        <div className="flex justify-center items-center w-full sm:w-1/2 space-x-2">
                            <div className="w-full sm:w-1/3">
                                <Button
                                    color="lightBlue"
                                    label={
                                        <div className='flex items-center justify-center'>
                                            <FiFilter />
                                            <label className='ml-1'>Filtros</label>
                                        </div>
                                    }
                                    onClick={openModal}
                                />
                            </div>
                            <div className="w-full sm:w-1/3">
                                <Button
                                    label={
                                        <div className='flex items-center justify-center'>
                                            <GoSortDesc />
                                            <label className='ml-1'>Título</label>
                                        </div>
                                    }
                                />
                            </div>
                            <div className="w-full sm:w-1/3">
                                <Button
                                    label={
                                        <div className='flex items-center justify-center'>
                                            <GoRows />
                                            <label className='ml-1'>Preencher</label>
                                        </div>
                                    }
                                    onClick={handlePreencherClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <AlphabetNavigation onSelectLetter={handleSelectLetter} />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-10 mt-5">
                    {recommendedBooks.map((book) => (
                        <div key={book.id} className="p-1">
                            <Card book={book} />
                        </div>
                    ))}
                </div>
            </div>

            <FilterModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default PesquisaPage;
