import React, { useEffect } from 'react';
import '../assets/css/Homi.css'; 
import logo from '../assets/Images/d-b.png'
const Navbar = () => {

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            const triggerHeight = 100;
            if (window.scrollY > triggerHeight) {
                navbar.classList.add('navbar-dark-bg');
                navbar.classList.remove('navbar-light-bg');
            } else {
                navbar.classList.add('navbar-light-bg');
                navbar.classList.remove('navbar-dark-bg');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav id="navbar" className="navbar container navbar-expand-lg m-auto z-3 fixed-top">
            <div className=" " > <img src={logo} alt='logo'   width="50"
              height="50"
              className="d-inline-block align-top"/></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end z-3" id="navbarNav">
                <ul className="navbar-nav ml-auto fw-bold z-3">
               





                    <li className="nav-item active  ">
                        <a className="nav-link  " href="!#"> Interior Design</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="!#">Architecture</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="!#">Furniture</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="!#">Q&A with JLD</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="!#">Books
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="!#">Instagram
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="!#">Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
