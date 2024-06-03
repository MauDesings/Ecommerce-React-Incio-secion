import React from 'react'
import { useProductContext } from '../../context/ProductContext'
import ItemList from '../../components/itemList/ItemList.jsx';

const AppProduct = () => {
    const {data,isLoading} = useProductContext();

    if (isLoading) return <h2 className='loading'>CARGANDO...</h2>
  return (
    <>
        <h2 className="subtitle">Productos</h2>
        <div className='content-items-grid'>
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
