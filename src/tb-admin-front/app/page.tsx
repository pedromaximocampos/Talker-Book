"use client";

import React, { FormEvent, useState } from 'react';
import Head from 'next/head';
import Input from './components/Input';
// import ErrorModal from './components/ErrorModal';
// import SuccessModal from './components/SuccessModal';
import Button from './components/Button';
import NavBar from './components/NavBar';
import Router from 'next/router';
import LoadingSpinner from './components/LoadingSpinner';

const Home: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);
    // const [response, setResponse] = useState<ApiResponse | null>(null);

    const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();

            setLoading(false);
            if (res.ok) {
              console.log(data);
                // setResponse({ success: true, message: 'Login efetuado com sucesso!' });
                setTimeout(() => Router.push('/dashboard'), 2000); // Redirecionar após sucesso
            } else {
                throw new Error(data.message || 'Erro ao fazer login');
            }
        } catch (error) {
            // setResponse({ success: false, message: error.message });
            setLoading(false);
        }
    };

    if (isLoading) {
      return (
        <LoadingSpinner />
      );
  }

    return (
        <>
            <Head>
                <title>Login | TBadmin</title>
            </Head>
            <NavBar />
            <div className="flex justify-center items-center h-full">
                <div className="mt-10 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <div className="flex items-center justify-center mb-6">
                        <h1 className="text-3xl font-black">
                            <span className="bg-blue-950 hover:bg-blue-900 text-white p-1">
                                TB
                            </span>
                            <span className="text-black">admin</span>
                        </h1>
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
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            />
                            <div>
                                <Input
                                    required={true}
                                    label="Senha"
                                    id="password"
                                    type="password"
                                    placeholder="Insira sua senha"
                                    name='password'
                                    value={password}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                />
                            </div>
                            <Button color='gradient' label="Entrar" type="submit" />
                        </div>
                    </form>
                    {/* {response && response.success && (
                        <SuccessModal
                            isOpen={true}
                            title={'Login efetuado com sucesso!'}
                            message={'Seja bem-vindo ao TBadmin!'}
                            onClose={() => Router.push('/dashboard')}
                        />
                    )}
                    {response && !response.success && (
                        <ErrorModal
                            isOpen={true}
                            title={'Erro ao fazer login!'}
                            message={response.message}
                            onClose={async () => setResponse(null)}
                        />
                    )} */}
                </div>
            </div>
        </>
    );
};

export default Home;
