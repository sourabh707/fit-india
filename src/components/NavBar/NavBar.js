import React from 'react'
// import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import logo from '../NavBar/LOGO.png'

import './NavBar.css'

function NavBar() {

    const [open, setOpen] = useState(false);

    return(
        <nav className="NavigationBar_Nav-navbar">
            <Link to="/" className="NavigationBar_Nav-navlogo" onClick={()=>setOpen(false)}>
                <div className='Website-Title'>
                    <div className='Navbar-Img'>
                        <img src={logo} alt='FIT INDIA'/>
                    </div>
                    <div className='title'>
                        <p>FIT INDIA</p>
                    </div>
                </div>
            </Link>
            <ul className={open ? 'NavigationBar_Nav-nav-links active' : 'NavigationBar_Nav-nav-links'}>
            <li className="NavigationBar_Nav-nav-item">
                    <Link to="/nutrition" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                        Nutrition
                    </Link>
                </li>
                
                <li className="NavigationBar_Nav-nav-item">
                    <Link to="/exercise" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                        Exercise
                    </Link>
                </li>
                <li className="NavigationBar_Nav-nav-item">
                    <Link to="/experience" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                        Experience
                    </Link>
                </li>
            </ul>
            <div onClick={() => setOpen(!open)} className="NavigationBar_Nav-nav-icon">
                {open ? <FiX /> : <FiMenu />}
            </div>
        </nav>
    )
}

export default NavBar;