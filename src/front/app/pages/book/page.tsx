"use client";
import React, { useState, useEffect } from "react";
import ToggleSideBar from "@/app/components/ToggleSideBar";
import { BookCadastro } from "@/app/interfaces/Book";
import { fetchBooks, fetchData } from "./data";
import { Review } from "@/app/interfaces/Review";
import RatingModal from "@/app/modals/RatingModal";
import protectedPage from "../protectedPage/page";

const BookDetailsPage: React.FC = () => {
    const [book, setBook] = useState<BookCadastro | undefined>(undefined);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await fetchData();
                const bookData = await fetchBooks();
                setBook(bookData);
                setReviews(data.Reviews);
            } catch (error) {
                console.error(error);
            }
        };

        fetch();
    }, []);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleAddReview = (review: { user: string; rating: number; comment: string }) => {
        setReviews((prevReviews) => [
            ...prevReviews,
            { id: prevReviews.length + 1, ...review },
        ]);
    };

    protectedPage();
    return (
        <div className="flex h-screen flex-col">
            <div className="flex flex-1">
                <ToggleSideBar />
                <div className="flex-1 flex flex-col overflow-auto">
                    <div className="bg-blue-950 text-white py-6 flex justify-center space-x-8">
                        <button className="hover:underline text-lg">
                            Download
                        </button>
                        <button className="hover:underline text-lg" onClick={handleModalToggle}>
                            Avaliar
                        </button>
                    </div>
                    <div className="flex-1 p-8 flex items-center justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-5xl">
                            <div className="w-full md:w-auto flex justify-center">
                                {book?.coverImageLink && (
                                    <img
                                        src={book.coverImageLink}
                                        alt="Book cover"
                                        className="w-full max-w-md"
                                    />
                                )}
                            </div>
                            <div className="w-full md:w-auto">
                                <h1 className="text-3xl font-bold">{book?.title}</h1>
                                <div className="mt-3 mb-6 flex flex-wrap gap-2">
                                    {book?.category && (
                                        <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                                            {book.category}
                                        </span>
                                    )}
                                    {book?.language && (
                                        <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                                            {book.language}
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-xl font-bold mt-2">
                                    {book?.publisher} | {book?.author}
                                </h2>
                                <p className="mt-2 font-bold">Lançamento: {book?.publicationDate}</p>
                                <p className="mt-2 font-bold">Páginas: {book?.pages}</p>
                                <p className="mt-2 font-bold">ISBN: {book?.isbn}</p>
                                <h3 className="text-xl font-bold mt-4">Descrição</h3>
                                <p className="mt-2 text-justify">{book?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-8 items-center md:w-1/2 lg:w-2/3 mx-auto">
                <h2 className="font-bold text-center text-3xl mb-4">
                    Comentários e Avaliações
                </h2>
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="mb-4 p-4 w-full bg-gray-100 shadow-md rounded-md"
                    >
                        <div className="flex items-center mb-2">
                            <div className="font-bold">{review.user}</div>
                            <div className="ml-2 text-yellow-500">
                                {"★".repeat(review.rating)}{" "}
                                {"☆".repeat(5 - review.rating)}
                            </div>
                        </div>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
            <div className="fixed bottom-4 right-4 z-10">
                <button
                    onClick={handleModalToggle}
                    className="py-3 px-6 bg-blue-950 text-white rounded-md cursor-pointer flex items-center hover:bg-blue-800"
                >
                    {isModalOpen ? "Fechar Avaliação" : "Avaliar"}
                </button>
            </div>
            <RatingModal
                isOpen={isModalOpen}
                onClose={handleModalToggle}
                onSubmit={handleAddReview}
            />
        </div>
    );
};

export default BookDetailsPage;
