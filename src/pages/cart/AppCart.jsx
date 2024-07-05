import React from 'react'
import './appCart.css'
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../../components/itemCart/ItemCart';
import {AiOutlineRollback } from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const AppCart = () => {
  const {state,handleClearCart} = useCartContext();
  const totalItemsCart = state.totalItems > 1 ? `${state.totalItems} items` : `${state.totalItems} item`
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleCheckout = () => {
    if (user) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className='cart'>
        {
            state.cart.length ? (
                <>
                    <ul className='cart__item-content'>
                        <li className='cart__head'>
                            <h3>CART <span>( {totalItemsCart} )</span></h3>
                        </li>

                        <li className='cart__body'>
                        {
                            state.cart.map(item => (
                            <ItemCart key={item.id} {...item}/>
                            ))
                        }
                        </li>

                        <li className='cart__footer-flex'>
                            <NavLink to='/product'>
                                <button className='cart_btn-back'>Atrás</button>
                            </NavLink>
                            
                            <button className='cart__btn-clear' onClick={handleClearCart}>Vaciar carrito</button>
                        </li>
                    </ul>

                    <div className='cart__sumary-content'>
                        <h3>Resumen del pedido</h3>
                        <div className='cart__sumary-info'>
                            <p>Productos <span>( {state.totalItems} )</span></p>
                            <h4>TOTAL : <span>$ {state.totalPrice}</span></h4>
                            <button className='cart__btn-checkout' onClick={handleCheckout}>Go to Checkout</button>
                            
                        </div>
                    </div>
                </>
            ) : (
                    <div className='cart__empty-content'>
                        <h3 className='cart__empty-message'>Tu carrito esta vacío</h3>
                        <NavLink to='/product' className='back-link'>
                            <button className='cart__nav-btn-back'> <AiOutlineRollback /> Ir a productos </button>
                        </NavLink> 
                    </div>
            )
        }
    </div>
   )
}

export default AppCart
