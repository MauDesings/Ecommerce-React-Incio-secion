import React, { useState } from 'react'
import './itemList.css'
import ProductInfoModal from '../productInfoModal/ProductInfoModal';

const ItemList = (item) => {
  const { title, price, image, category } = item;
  const [show, setShow] = useState(false);
  return (
    <>
        <div className="item">
            <img src={image} alt={title} className="item__image" />

            <div className="item__info">
                <h3 className="item__subtitle">{title}</h3>
                <p className="item__price">Precio: ${price}</p>
                <p className="item__price">Categoria: {category}</p>
            </div>

            <button className="item__btn" onClick={()=> setShow(!show)}>Más información</button>
        </div>

        <ProductInfoModal item={item} show={show} setShow={setShow}/>
    </>
  )
}

export default ItemList
