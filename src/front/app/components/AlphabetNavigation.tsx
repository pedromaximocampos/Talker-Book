import React, { useState } from 'react';

interface AlphabetNavigationProps {
    onSelectLetter?: (letter: string) => void;
}

const AlphabetNavigation: React.FC<AlphabetNavigationProps> = ({ onSelectLetter }) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const [selectedLetter, setSelectedLetter] = useState<string>('');

    const handleLetterClick = (letter: string) => {
        setSelectedLetter(letter);
        if (onSelectLetter) {
            onSelectLetter(letter);
        }
    };

    return (
        <div className="flex flex-wrap justify-center mt-5">
            {alphabet.map((letter) => (
                <button
                    key={letter}
                    className={`mx-1 my-1 sm:my-0 px-2 py-1 ${selectedLetter === letter ? 'bg-blue-800 rounded-full text-white' : 'bg-transparent'}`}
                    onClick={() => handleLetterClick(letter)}
                >
                    {letter}
                </button>
            ))}
            <button
                className={`mx-1 my-1 sm:my-0 px-2 py-1 ${selectedLetter === 'ALL' ? 'bg-blue-800 rounded-full text-white' : 'bg-transparent'}`}
                onClick={() => handleLetterClick('ALL')}
            >
                TODOS
            </button>
        </div>
    );
};

export default AlphabetNavigation;