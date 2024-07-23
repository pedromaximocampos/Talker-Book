"use client";
// pages/index.tsx
import React, { useEffect, useState } from 'react';
import NavBar from '@/app/components/NavBar';
import Footer from "@/app/components/Footer";
import Carousel from '@/app/components/Carousel';
import { BookDTO } from '@/app/interfaces/Book';
import { BooksData } from '@/app/interfaces/Book';
import Card from "@/app/components/Card";
import { fetchBooks } from './data';
import ToggleSideBar from '@/app/components/ToggleSideBar';
import protectedPage from '../protectedPage/page';



const Home: React.FC = () => {
    const [userBooks, setUserBooks] = useState<BookDTO[]>([]);
    const [recommendedBooks, setRecommendedBooks] = useState<BookDTO[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBooks = async () => {
            setTimeout(async () => {
                const { userBooks, recommendedBooks } = await fetchBooks();
                setUserBooks(userBooks);
                setRecommendedBooks(recommendedBooks);
                setLoading(false);
            }, 2000);
        };

        loadBooks();
    }, []);

    if (loading) {
        protectedPage();
        return (
            <>
               
                <div className="flex items-center justify-center h-screen -mt-40">
                    <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
                </div>
            </>
        );
    }

    return (
        <>
            <ToggleSideBar />
            <div className="container-fluid px-8 ml-12">
                <div className="py-2 flex justify-center flex-col">
                    <div className="grid grid-cols-2 gap-12 mt-2 pt-2">
                        <h1 className="text-2xl font-bold mb-12">Mais visualizados</h1>
                    </div>
                    <h2 className="text-3xl text-blue-950 font-bold mb-6">Meus Livros</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    {userBooks.map((book) => (
                            <Card key={book.id} book={book} />
                        ))}
                    </div>
                    <h2 className="text-3xl text-blue-950 font-bold mb-10 mt-16">Recommended Books</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                        {recommendedBooks.map((book) => (
                            <Card key={book.id} book={book} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;





