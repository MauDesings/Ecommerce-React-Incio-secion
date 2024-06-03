import React from 'react'
import './appCart.css'
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../../components/itemCart/ItemCart';
import { NavLink } from 'react-router-dom';

const AppCart = () => {
  const {state,handleClearCart} = useCartContext();
  const totalItemsCart = state.totalItems > 1 ? `${state.totalItems} items` : `${state.totalItems} item`
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
                                <button className='cart_btn-back'>Atráz</button>
                            </NavLink>
                            
                            <button className='cart__btn-clear' onClick={handleClearCart}>Vaciar carrito</button>
                        </li>
                    </ul>

                    <div className='cart__sumary-content'>
                        <h3>Resumen del pedido</h3>
                        <div className='cart__sumary-info'>
                            <p>Productos <span>( {state.totalItems} )</span></p>
                            <h4>TOTAL : <span>$ {state.totalPrice}</span></h4>
                            <NavLink to='/checkout'>
                                <button className='cart__btn-checkout'>Go to Checkout</button>
                            </NavLink>
                        </div>
                    </div>
                </>
            ) : (
                    <div className='cart__empty-content'>
                        <h3 className='cart__empty-message'>Tu carrito esta vacío</h3>
                    </div>
            )
        }
    </div>
   )
}

export default AppCart
