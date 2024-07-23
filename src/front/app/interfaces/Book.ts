export interface BookDTO {
    id: number;
    title: string;
    description: string | undefined;
    image: string;
}

export interface Books {
    id: number;
    title: string;
    description: string;
    image: string;
    author: string;
    category: string;
    isbn: string;    
    publisher: string;
    publicationDate: string;
    language: string;
    pages: number;
    price: number;
    coverImageLink: string;
    pdfLink: string;
}

export interface BookCadastro {
    title: string;
    category: string;
    isbn: string;
    description: string;
    pages: number;
    language: string;
    author: string;
    publisher: string;
    publicationDate: string;
    coverImageLink: string;
    pdfLink: string;
  }

export interface BooksData {
    userBooks: BookDTO[];
    recommendedBooks: BookDTO[];
}
