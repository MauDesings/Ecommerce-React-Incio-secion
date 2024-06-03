import React from 'react'
import { useProductContext } from '../../context/ProductContext'
import './appCategorie.css'
import ItemList from '../../components/itemList/ItemList';
import { NavLink } from 'react-router-dom';

const AppCategorie = () => {
    const {categoryOnlyData,data} = useProductContext();
  return (
    <div>
      <h2 className='filter__title-category'>Compra Por Categorias</h2>

      <div className='filter__content-buttons'>
        {
            categoryOnlyData.map((item,index) => (
              <NavLink key={index} to={`/category/${item}`}>
                 <button className='filter__buttons'>{item}</button>
              </NavLink>
            ))
        }
      </div>

      <div className='content-items-grid'>
        {
          data.featureProducts.map(item => (
            <ItemList key={item.id} {...item} />
          ))
        }
      </div>
    </div>
  )
}

export default AppCategorie
