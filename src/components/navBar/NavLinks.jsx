import React from 'react'
import { NavLink } from 'react-router-dom'
import { useProductContext } from '../../context/ProductContext';

const NavLinks = () => {
  const{handleOpen}= useProductContext();
  return (
    <>
      <li><NavLink onClick={handleOpen} className='link' to='/'>Inicio</NavLink></li>
      <li><NavLink onClick={handleOpen} className='link' to='/Product'>Porductos</NavLink></li>
      <li><NavLink onClick={handleOpen} className='link' to='/Categories'>Categorias</NavLink></li>
    </>
  )
}

export default NavLinks
