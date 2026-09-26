import Link from "next/link";
const NotFound = () => {
    return (
        <div className="items-center text-center mt-60">
           <h2 className="text-7xl text-red-400 font-extrabold mb-20">Error</h2>
           <p className="text-2xl font-bold text-gray-500">Oops! It seems like something went wrong.</p>

        <Link href="/">
        
        <button className="w-full lg:w-auto my-4 border rounded-2xl px-1 sm:px-16 py-5
         text-white text-2xl font-extrabold hover: bg-indigo-800  border-black mt-16 ">Back to Home Page</button>
        
        </Link>

        </div>
    );
};

export default NotFound;