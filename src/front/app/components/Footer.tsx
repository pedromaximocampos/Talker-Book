import React from 'react';

const Footer = () => {


    return (
        <footer className="bg-blue-950 text-white py-4 px-2 mt-6">
            <div className="mx-auto text-center max-w-7xl">

                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">

                    <div>
                        <h1 className="text-lg font-bold">TalkerBook</h1>

                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 mt-4">
                    <div className="space-y-1 -m-1">
                        <ul className="space-y-1">
                            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Iniciar Sessão</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Cadastrar-se</a></li>
                        </ul>
                    </div>
                    <div className="space-y-1 -m-1">
                        <ul className="space-y-1">
                            <li><a href="#" className="text-gray-300 hover:text-white">Contato</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Suporte</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="space-y-1 -m-1">
                        <ul className="space-y-1">
                            <li><a href="#" className="text-gray-300 hover:text-white">Privacidade</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Segurança</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Termos</a></li>
                        </ul>
                    </div>
                    <div className="space-y-1 -m-1">
                        <ul className="space-y-1">
                            <li><a href="#" className="text-gray-300 hover:text-white">YouTube</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Notícias</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">TikTok</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;





