import {Link} from "react-router-dom";
import Button from "./Button.tsx";

const links: string[] = ["Home", "About", "Contact"];
const NavBar = () => {
    return (
        <div className="shadow-xl/30 ... fixed w-full">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-[#2F3E46] text-white flex ">
                <div className='flex items-center text-xl'>
                    <h1 className='p-4 text-yellow-400 font-extrabold'>DhanuX</h1>
                </div>
                <div className='flex items-center justify-center w-full text-xl'>
                    {links.map((link, index) => (
                        <Link to={`/${link}`} key={index} className='p-4'>{link}</Link>
                    ))}
                </div>
                <div className='p-4 flex items-center justify-center'>
                    <Button name = {"Download CV"} color="#fee440" />
                </div>
            </nav>
        </div>

    )
}
export default NavBar ;

