import React, { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    Easy Learn   <i class="fal fa-book-spells"/>
              </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item-nav'>
                        <Link to='/home.teacher' className='nav-links' onclick={closeMobileMenu}>
                            Home
                      </Link>
                    </li>

                    <li className='nav-item-nav'>
                        <Link to='/' className='nav-links' onclick={closeMobileMenu}>
                            Profile
                      </Link>
                    </li> 
                    <li className='nav-item-nav'>
                        <Link to='/' className='nav-links' onclick={closeMobileMenu}>
                            Notifications
                      </Link>
                    </li>
                    <li className='nav-item-nav'>
                        <Link to='/' className='nav-links-mobile' onclick={(e)=>
                            {
                                sessionStorage.removeItem("type");
                                closeMobileMenu();  
                            }}>
                            Logout
                      </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default Navbar;