import { text } from "stream/consumers"

export default function Navbar (){
    
    
    
    return(
        <nav className=" text-white flex justify-evenly w-[45%] lg:w-[40%]  ">
            <a href="/"  className="ease-in-out duration-500 text-glow">Home</a>
            <a href="about" className=" hover:text-yellow-500 ease-in-out duration-500 text-glow">About</a>
            <a href="contact" className=" hover:text-yellow-500 ease-in-out duration-500 text-glow">Contact</a>
        </nav>
    )
}