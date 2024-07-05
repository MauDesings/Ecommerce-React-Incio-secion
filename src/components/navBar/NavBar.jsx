import React, { useState } from 'react'
import NavLinks from './NavLinks'
import {RiMenuFill,RiCloseFill} from 'react-icons/ri'
import './navBar.css'
import CartWidget from '../cartWidget/CartWidget'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const {user,handleSignOut} = useAuthContext();
    const navigate = useNavigate();

    return (
        <nav className='nav container'>
            <RiMenuFill className='icon' onClick={()=> setOpenMenu(!openMenu)}/>
            <span className='nav-logo'>LOGO</span>

            <div className={openMenu ? 'menu-modal opacity' : 'menu-modal'}>
                <ul className={openMenu ? 'menu-links open' : 'menu-links'}>
                    <NavLinks />
                    <RiCloseFill className='icon icon-close' onClick={()=> setOpenMenu(!openMenu)} />
                </ul>
            </div>

            <div className='content-login-cart'>
                {
                    user ? (
                        <>
                            <button className='sign-out' onClick={() => handleSignOut(navigate)}>Cerrar sesión</button>
                        </>
                    ) : (
                        <NavLink to="/login" className='link'>Iniciar sesión</NavLink>
                    )
                }

                <NavLink to='/Cart' className='link'>
                    <CartWidget />
                </NavLink>
            </div>
           
        </nav>
    )
}

export default NavBar
