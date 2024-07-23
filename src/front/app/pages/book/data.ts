import { BookCadastro } from "@/app/interfaces/Book";
import { BookDTO } from "@/app/interfaces/Book";

export const fetchData = async () => {    
    const Reviews = [
        {
            id: 1,
            user: "Joao",
            rating: 5,
            comment: "Livro Incrivel! Super Recomendo.",
        },
        {
            id: 2,
            user: "Ana",
            rating: 4,
            comment: "Boa leitura mas, lento em alguns capítulos.",
        },
        {
            id: 3, user: "Paulo",
            rating: 4,
            comment: "Amo o mundo da magia!",
           
        },
        {
            id: 4,
            user: "Clara",
            rating: 3,
            comment: "É ok, não o que eu esperava.",
        },
        {
            id: 5,
            user: "Maria",
            rating: 2,
            comment: "Livro muito chato, não recomendo.",
        },
        {
            id: 6,
            user: "Ricardo",
            rating: 1,
            comment: "Péssimo, muito previsivel.",
        },
    ];
    return {Reviews};
};
export const fetchBooks = async (): Promise<BookCadastro> => {

    const Book: BookCadastro =
    {
        title: "Harry Potter e a Câmara Secreta",
        category: "Fantasia",
        isbn: "123456789",
        pages: 300,
        language: "Português",
        author: "JK Rowling",
        publisher: "EDITORA ROCCO LTDA.",
        publicationDate: "01/01/2021",
        coverImageLink: "https://m.media-amazon.com/images/I/71MUiF4iVzL._AC_UF894,1000_QL80_.jpg",
        pdfLink: "https://via.placeholder.com/150",
        description: "Harry Potter e a Câmara Secreta é o segundo livro da série escrita por J.K. Rowling. Durante seu segundo ano em Hogwarts, Harry enfrenta novos perigos quando a escola é ameaçada por uma série de ataques que deixam os alunos petrificados. Descobre-se que a lenda da Câmara Secreta, criada por Salazar Slytherin, é verdadeira, e que um monstro está à solta. Harry, com a ajuda de seus amigos Ron e Hermione, investiga o mistério e descobre que o monstro é um basilisco. Eles também encontram um diário mágico pertencente a Tom Riddle, que revela ser uma versão jovem de Voldemort. No confronto final, Harry salva Ginny Weasley e derrota o basilisco, provando mais uma vez sua coragem e lealdade.",

    }
    return Book;
};

