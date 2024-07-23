'use client'

import Cookies from 'js-cookie';
import ROUTES from "@/app/constants/routes";
import axios from "axios";
import { Response } from '@/app/interfaces/Response';

export default async function signInAction(formData: FormData): Promise<Response> {

    try {

        const response = await axios.post(ROUTES.signin, { 
            email: formData.get('email'), 
            password: formData.get('password') 
        });

        const token = response.data.data[0]

        Cookies.set('token', token, { expires: 7, sameSite: 'Strict' });

        return { success: true, message: 'Login efetuado com sucesso' };

    }
    catch (error: any) {

        console.log(error);

        return { success: false, message: error.message };
    }
};
