import { FaSearch } from 'react-icons/fa';

const Pesquisa = () => {
    return (
        <div className="flex w-full mx-3 rounded bg-blue-100">
            <input className=" w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none " type="search" name="search" placeholder="Procurar por nome da Coleção..." />
            <button type="submit" className="m-2 rounded bg-blue-600 px-4 py-2 text-white">
                <FaSearch />
            </button>
        </div>
    );
};

export default Pesquisa;