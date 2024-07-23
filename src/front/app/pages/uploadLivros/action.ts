import axios from 'axios';
import Cookies from 'js-cookie';
import ROUTES from "@/app/constants/routes";
import { BookCadastro } from '@/app/interfaces/Book';

interface CreateBookResponse {
    success: boolean;
    [key: string]: any;
}

export async function createBookAction(formData: FormData): Promise<CreateBookResponse> {
    try {
        const token = Cookies.get('token');

        const response = await axios.post(
            ROUTES.createBook,
            {
                ...getDataFromFormData(formData)
            },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        );

        return {
            success: true,
            message: response.data.message,
            ...response.data
        };

    }
    catch (error: any) {
        return {
            success: false,
            message: error.message
        };
    }

    function getDataFromFormData(formData: FormData): BookCadastro {
        const data: BookCadastro = {
            title: formData.get('título') as string || '',
            category: formData.get('categoria') as string || '',
            isbn: formData.get('isbn') as string || '',
            description: formData.get('descição') as string || '',
            pages: Number(formData.get('páginas') || ''),          
            language: formData.get('lingugem') as string || '',
            author: formData.get('autor') as string || '',
            publisher: formData.get('editora ') as string || '',
            publicationDate: formData.get('datedepublicação') as string || '',
            coverImageLink: formData.get('capalivro') as string || '',
            pdfLink: formData.get('pdflivro') as string || '',
        };

        return data;
    }
}
