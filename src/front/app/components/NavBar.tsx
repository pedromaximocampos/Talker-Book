import NextLink from 'next/link';

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center py-5 px-6 bg-blue-950 shadow-md text-white  w-full ">
            <div className="text-lg font-black">TalkerBook</div>
            <div>
                <NextLink href="/pages/signIn" passHref>
                   Entrar
                </NextLink>
            </div>
        </nav>
    );
};

export default NavBar;
