import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { HashLink as Link } from 'react-router-hash-link'


const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (

        <>
            <nav className="navbar navbar-expand-md  bg-dark fixed-top ">
                <div className="container">
                    <a className="navbar-brand text-light fw-bold " href="#">
                        <img src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" alt="" />
                        Lee Code
                    </a>
                    <button
                        className="navbar-toggler text-light"
                        type="button"
                        onClick={handleNav}
                    >
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </button>
                    <div className={`collapse navbar-collapse ${nav ? "show" : ""}`}>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to='#home' className="nav-link text-light">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#careers' className="nav-link text-light">
                                    Career
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="#About" className="nav-link text-light">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#contact' className="nav-link text-light">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </>

    )
}

export default NavBar