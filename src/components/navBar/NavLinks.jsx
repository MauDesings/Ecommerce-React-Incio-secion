import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <>
      <li><NavLink className='link' to='/'>Incicio</NavLink></li>
      <li><NavLink className='link' to='/Product'>Porductos</NavLink></li>
      <li><NavLink className='link' to='/Categories'>Categorias</NavLink></li>
    </>
  )
}

export default NavLinks
