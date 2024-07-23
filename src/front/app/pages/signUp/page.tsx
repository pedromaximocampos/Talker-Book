"use client";
import React, { FormEvent, useState } from "react";
import Input from "../../components/Input";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import { signUpAction } from "./action";
import ErrorModal from "@/app/modals/ErrorModal";
import SuccessModal from "@/app/modals/SucessModal";
import { Response } from "../../interfaces/Response";

const Cadastro: React.FC = () => {

    const [response, setResponse] = useState<Response>({ success: undefined, message: undefined });

    const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const signUpResponse = await signUpAction(new FormData(event.currentTarget));

        setResponse(signUpResponse as Response);
    };


    return (
        <>
            <NavBar />
            <div className="flex justify-center items-center h-full">
                <div className="mx-auto p-4">
                    <h1 className="text-4xl font-extrabold mb-1 mt-20 text-blue-950">Cadastre-se na TalkerBook</h1>
                    <p className="text-sm mb-8 text-center">Sua biblioteca online em qualquer lugar e em qualquer hora</p>
                    <hr />
                    <div className=" rounded-md shadow-blue-200  shadow-xl border border-blue-300 p-6">
                        <label className="text-2xl font-bold flex justify-center">Informaçoes da conta:</label>
                        <form onSubmit={handleSignUp}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-3">
                                <div>
                                    <Input
                                        required={true}
                                        label="Nome completo"
                                        id="name"
                                        placeholder="Insira seu nome completo"
                                    />
                                </div>
                                <div>
                                    <Input
                                        required={true}
                                        label="E-mail"
                                        id="email"
                                        type="email"
                                        placeholder="Insira seu e-mail"
                                    />
                                </div>
                                <div>
                                    <Input
                                        required={true}
                                        label="CPF"
                                        id="cpf"
                                        placeholder="Insira seu CPF"
                                    />
                                </div>
                                <div>
                                    <Input
                                        required={true}
                                        label="Senha"
                                        id="password"
                                        type="password"
                                        placeholder="Insira sua senha"
                                    />
                                </div>
                            </div>
                            <button className='w-full mt-4 bg-gradient-to-l from-blue-600 to-blue-800 rounded-lg text-white p-2' type="submit" >Criar Conta!</button>
                      </form>
                    </div>

                    {/* MODAL DE SUCESSO */}
                    <SuccessModal
                        isOpen={response.success == true}
                        title={'Cadastro efetuado com sucesso!'}
                        message={'Faça login na TalkerBook!'}
                        onClose={async () => setResponse({ success: undefined, message: undefined })}
                    />

                    {/* MODAL DE ERRO */}
                    <ErrorModal
                        title='Erro ao Cadastrar!'
                        message={response.message || "Motivo de erro desconhecido."}
                        isOpen={response.success == false}
                        onClose={async () => setResponse({ success: undefined, message: undefined })}
                    />
                </div>
            </div>
        </>
    );
};

export default Cadastro;
