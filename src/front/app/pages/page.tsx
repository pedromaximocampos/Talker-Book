import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const LandingPage: React.FC = () => {
    return (
        <>
            <NavBar />
            <div className="pt-10">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Catalogação em nuvem</h1>
                    <p className="mt-4 text-lg">Sua biblioteca nunca pareceu tão boa.</p>
                    <button className="mt-8 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded" >
                        <Link href={"/signUp"}>
                            Começar
                        </Link>
                    </button>
                </div>
                <div className="flex justify-center">
                    <img className="mx-auto" src="https://assets-global.website-files.com/60886260e580075ff4c981e2/60b6ee8caad3a745f8cbafed_artigo_beneficios-v1.png" />
                </div>
                <div className="bg-blue-800 text-white py-20">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold">Crie, Gerencie e Compartilhe suas Coleções</h2>
                        <p className="mt-4 text-lg">
                            Use a nossa plataforma para gerenciar suas coleções de livros.
                            Adicione itens facilmente e compartilhe com seus amigos.
                        </p>
                        <button className="mt-8 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded">
                            <Link href={"/signUp"}>
                                Começar
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            <section className="bg-gray-100 py-20">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-8 gap-8">
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-bold">Dados Automáticos para Livros</h3>
                        <p className="mt-4 text-center">
                            Basta digitalizar seu catálogo de barras ISBN/UPC usando um scanner físico, ou mesmo suas próprias informações.
                            Nós cuidamos do resto.
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="w-1/2" src="https://www.apowersoft.com.br/wp-content/uploads/2021/07/cover-download-online-books.jpg" alt="Data Collection" />
                    </div>
                </div>
            </section>

            <section className="bg-blue-800 text-white py-20">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex justify-center items-center">
                        <img className="w-1/3" src="https://cdn.icon-icons.com/icons2/317/PNG/512/cloud-sync-icon_34465.png" alt="Cloud Sync" />
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <h3 className="text-2xl font-bold">A Sincroniza de Nuvem mantém suas coleções atualizadas em vários dispositivos</h3>
                        <p className="mt-4">
                            Acesse suas coleções de qualquer lugar, em qualquer dispositivo.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto flex flex-col justify-center items-center text-center">
                    <h2 className="text-3xl font-bold">Mais de 500,000 Consumidores Felizes</h2>
                    <p className="mt-4 text-lg">TalkerBook foi construído de baixo para cima totalmente em feedback do usuário.</p>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default LandingPage;
