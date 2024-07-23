"use client";

import React, { useReducer, FormEvent, useState } from 'react';
import signInAction from './action';
import Input from '@/app/components/Input';
import NavBar from '@/app/components/NavBar';
import Link from 'next/link';
import SuccessModal from '@/app/modals/SucessModal';
import ErrorModal from '@/app/modals/ErrorModal';
import Button from '@/app/components/Button';
import { Response } from '@/app/interfaces/Response';

const LoginPage: React.FC = () => {

    const [response, setResponse] = useState<Response>({ success: undefined, message: undefined });

    const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        setResponse(
            await signInAction(new FormData(event.currentTarget)) as Response
        );
    };

    return (
        <>
            <NavBar />
            <div className=" flex justify-center items-center h-full">
                <div className="mt-20 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border border-blue-300 rounded-lg shadow-blue-200 shadow-lg">
                    <div className="flex items-center text-blue-950 mb-6">
                        <h1 className="text-2xl font-black mr-auto">TalkerBook</h1>
                        <h2 className="text-xl">Iniciar Sessão</h2>
                    </div>
                    <form onSubmit={handleSignIn}>
                        <div className="grid grid-cols-1 gap-6 mb-5">
                            <Input
                                required={true}
                                label="E-mail"
                                id="email"
                                type="email"
                                placeholder="Insira seu e-mail"
                                name='email'
                            />
                            <div>
                                {/* todo botao de senha ficar vizivel */}
                                <Input
                                    required={true}
                                    label="Senha"
                                    id="password"
                                    type="password"
                                    placeholder="Insira sua senha"
                                    name='password'
                                />
                                <Link className='text-sm flex justify-end hover:text-blue-600' href={'/pages/esqueciSenha'}>Esqueceu a senha?</Link>
                            </div>

                            <div className="flex items-center">
                                <label htmlFor="rememberMe" className="text-sm mr-2">Lembrar-me</label>
                                <input
                                    id="rememberMe"
                                    type="checkbox"
                                    className="h-4 w-4 "
                                    name='rememberMe'
                                />
                            </div>
                            <button className='bg-gradient-to-l from-blue-600 to-blue-800 rounded-lg text-white p-2' type="submit" >Entrar</button>
                        </div>
                    </form>
                    <hr />
                    <div className='flex justify-center'>
                        <text className='mr-1'>Nao é cadastrado ainda? </text>
                        <Link className='hover:text-blue-500' href={'/pages/signUp'}>Cadastre-se!</Link>
                    </div>

                    {/* MODAL DE SUCESSO */}
                    <SuccessModal
                        isOpen={response.success == true}
                        title={'Login efetuado com sucesso!'}
                        message={'Seja bem-vindo ao TalkerBook!'}
                        onClose={async () => window.location.href = '/home'}
                    />

                    {/* MODAL DE ERRO */}
                    <ErrorModal
                        title='Erro ao fazer Login!'
                        message={response.message || "Erro interno."}
                        isOpen={response.success == false}
                        onClose={async () => setResponse({ success: undefined, message: undefined })}
                    />

                </div>
            </div>
        </>
    );
};

export default LoginPage;