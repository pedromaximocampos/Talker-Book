import React, { useState } from "react";
import { RatingModalProps } from "../interfaces/Rate";

const RatingModal: React.FC<RatingModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [user, setUser] = useState<string>("");
    const [rating, setRating] = useState<number>(0);
    const [comment, setComment] = useState<string>("");

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    const handleSubmit = () => {
        onSubmit({ user, rating, comment });
        setUser("");
        setRating(0);
        setComment("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white min-w-6xl flex flex-col rounded-xl shadow-lg">
                <div className="px-12 py-5">
                    <h2 className="text-blue-950 text-3xl min-w-96 flex items-center justify-center font-semibold ">Avaliação</h2>
                </div>
                <div className="w-full flex flex-col items-center">
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <div className="flex space-x-3">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    className={`w-12 h-12 ${rating >= star ? "text-yellow-500" : "text-gray-500"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    onClick={() => handleRatingChange(star)}
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <div className="w-3/4 flex flex-col">
                        <textarea
                            rows={4}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="p-4 text-blue-800 rounded-xl resize-none w-full h-40 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"   
                            placeholder="Detalhe aqui sua avaliação."
                        ></textarea>
                        <button
                            onClick={handleSubmit}
                            className="py-3 my-8 text-lg bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl text-white"
                        >
                            Concluir
                        </button>
                    </div>
                </div>
                <div className="h-20 flex items-center justify-center">
                    <button
                        onClick={onClose}
                        className="text-blue-950 font-bold"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RatingModal;
