import { BookDTO, BooksData } from "@/app/interfaces/Book";

export const fetchBooks = async (): Promise<BooksData> => {
    const userBooks: BookDTO[] = [
        { id: 1, title: 'User Book 1', description: 'This is the first user book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
        { id: 2, title: 'User Book 2', description: 'This is the second user book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
        { id: 3, title: 'User Book 3', description: 'This is the third user book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
        { id: 4, title: 'User Book 4', description: 'This is the fourth user book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
        { id: 5, title: 'User Book 5', description: 'This is the fifth user book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
        { id: 6, title: 'User Book 6', description: 'This is the sixth user book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
         ];

    const recommendedBooks: BookDTO[] = [
        { id: 8, title: 'Recommended Book 1', description: 'This is the first recommended book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
        { id: 9, title: 'Recommended Book 2', description: 'This is the second recommended book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
        { id: 10, title: 'Recommended Book 1', description: 'This is the first recommended book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
        { id: 11, title: 'Recommended Book 2', description: 'This is the second recommended book.', image: 'https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg' },
    ];

    return { userBooks, recommendedBooks };
};