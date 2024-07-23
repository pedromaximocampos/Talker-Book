"use client";

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';


// @ts-ignore
const Card = ({ book }) => {

    return (
        <div className="overflow-hidden flex flex-col w-40 m-2 items-center">
            {book.image && (
                <Image width={150} height={200} className="object-cover rounded-md" src={book.image} alt="Capa do Livro" />
            )}
            <div className="card-content p-1 flex flex-col">
                <div className="text-center">
                    <h3 className="text-base font-bold text-gray-500">{book.title}</h3>
                </div>
                <div className="txt text-center">
                    <h4 className="font-medium text-sm text-gray-500">{book.title}</h4>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    book: PropTypes.object.isRequired,
}

export default Card;
