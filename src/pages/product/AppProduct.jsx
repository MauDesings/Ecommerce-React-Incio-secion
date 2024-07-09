import React from 'react'
import { useProductContext } from '../../context/ProductContext'
import ItemList from '../../components/itemList/ItemList.jsx';
import './appProduct.css'

const AppProduct = () => {
    const {data,isLoading} = useProductContext();

    if (isLoading) return <h2 className='loading'>CARGANDO...</h2>
  return (
    <>
        <h2 className="subtitle-product">Productos</h2>
        <div className='content-items-grid-product'>
            {
                data.productData.map(item =>(
                    <ItemList key={item.id} {...item}/>
                ))
            }
        </div>
    </>
  )
}

export default AppProduct
