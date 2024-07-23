'use client'

import ROUTES from "@/app/constants/routes";
import { Response } from "@/app/interfaces/Response";
import axios from "axios";



function getDataFromFormData(formData: FormData) {

    const data = {
        name: formData.get("name") as string ,
        email: formData.get('email') as string,
        cpf: formData.get('cpf') as string,
        password: formData.get('password') as string
    }

    return data;
}

export async function signUpAction(formData: FormData) {

    try {
        const response = await axios.post
            (ROUTES.signup,
                getDataFromFormData(formData)
            )

        response.data.success = true;

        return response.data;

    }
    catch (error: any) {

        console.log(error);

        var response = { data: { success: false, message: error.message } };

        return response.data;
    }
};
