import { BookDTO } from "@/app/interfaces/Book";

export const fetchBooks = async (): Promise<BookDTO[]> => {
    const recommendedBooks: BookDTO[] = [
        { id: 8, title: 'Recommended Book 1', description: 'This is the first recommended book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
        { id: 9, title: 'Recommended Book 2', description: 'This is the second recommended book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
        { id: 10, title: 'Recommended Book 3', description: 'This is the third recommended book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
        { id: 11, title: 'Recommended Book 4', description: 'This is the fourth recommended book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
        { id: 8, title: 'Recommended Book 1', description: 'This is the first recommended book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
        { id: 9, title: 'Recommended Book 2', description: 'This is the second recommended book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
        { id: 10, title: 'Recommended Book 3', description: 'This is the third recommended book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
        { id: 11, title: 'Recommended Book 4', description: 'This is the fourth recommended book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
    ];

    return recommendedBooks;
};
