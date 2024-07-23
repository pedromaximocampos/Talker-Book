import Image from 'next/image';


interface Image {
    src: string;
    alt: string;
    width: string;
}

const NavBar = (img: Image) => {
    return (
        <nav className="flex justify-between items-center mb-10 py-5 px-6 bg-blue-950 shadow-md text-white w-full">
            <div className="text-lg font-black">TalkerBook</div>
            <img src={img.src} alt={img.alt} className={img.width} />
        </nav>
    );
};

export default NavBar;
