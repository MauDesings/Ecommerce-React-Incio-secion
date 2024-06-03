import React, { useState } from 'react'
import NavLinks from './NavLinks'
import {RiMenuFill,RiCloseFill} from 'react-icons/ri'
import './navBar.css'
import CartWidget from '../cartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);

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

            <NavLink to='/Cart' className='link'>
                <CartWidget />
            </NavLink>
        </nav>
    )
}

export default NavBar
