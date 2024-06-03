import React, { useState } from 'react'
import {RiCloseFill} from 'react-icons/ri'
import './productInfoModal.css'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const ProductInfoModal = ({item,show,setShow}) => {
    const {image,title,price,category,description,id} = item;
    const {handleAdd} = useCartContext();
    const [amount,setAmount] = useState(0);

    function setDecrease() {
        amount > 1 ? setAmount(amount - 1) : setAmount(0);
    }

    function setIncrease() {
        setAmount(amount + 1);
    }

  return (
    <div className={show ? 'single__modal show' : 'single__modal'}>

        <div className="single__modal-flex container">
            <RiCloseFill className='single__iconClose' onClick={()=>setShow(!show)}/>
            
            <div className="single__column single__rigth">
                <img className='single__img' src={image} alt={title} />
            </div>

            <div className="single__column single__left">
                <div>
                    <h3 className='single__category'>{category}</h3>
                    <h2 className='single__title'>{title}</h2>
                </div>

                    <p className='single__price'>$ {price}</p>

                <div>
                    <p className='single__description'>{description}</p>
                    <div className='single__btn-content'>
                        <button className='single__decrease' onClick={setDecrease}>-</button>
                        <input className='single__amount' type="text" name="quantity" value={amount} onChange={(e)=> e.target.value}/>
                        <button className='single__increase' onClick={setIncrease}>+</button>
                    </div>
                    <div className='single__btn-content add'>
                        <button className='single__btn-add' onClick={()=> handleAdd(id,amount,setAmount)}>Agregar producto</button>
                        <NavLink to='/Cart'> <button className='single__btn-add go-to-cart'>Ir al carrito</button> </NavLink>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductInfoModal
