import Link from "next/link"
import { FaYoutube, FaInstagram } from "react-icons/fa"

export default function Navbar () {
    return (
        
        <nav className="bg-indigo-400 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className=" prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white place-content-center">
            <Link href="/" className="text-white no-underline">
            Alejandra Quintero 
            </Link>
            </h1>
            <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-3xl" >
             <Link className="text-white " href="https://www.youtube.com/channel/UCftTEx7Ws5deHXfe4INinKw">
             <FaYoutube/>
                </Link>

                <Link className="text-white" href="https://www.instagram.com/alliecolman/" >
                    <FaInstagram/>
                </Link>

            </div>

            </div>
        
        </nav>
    )
}