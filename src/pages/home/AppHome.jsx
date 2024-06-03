import React from 'react'
import './appHome.css'
import { useProductContext } from '../../context/ProductContext'
import ItemList from '../../components/itemList/ItemList';
import SvgWave from '../../components/svg/SvgWave';
import CardService from '../../components/cardServices/CardService';
import SvgWorld from '../../components/svg/SvgWorld';
import SvgQuality from '../../components/svg/SvgQuality';
import SvgOffers from '../../components/svg/SvgOffers';
import SvgSecure from '../../components/svg/SvgSecure';
import { NavLink } from 'react-router-dom';

const AppHome = ({greeting}) => {
    const {data} = useProductContext();
  return (
    <>
        <div className='content-img-home'>
            <h3 className='subtitle-home'>{greeting}</h3>
            <h1 className='title-home'>Nei Store</h1>
            <p className='paragraph-home'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere tempore molestias quis voluptatibus illo atque itaque. Blanditiis sunt nulla eius.</p>
            <NavLink to='/Product'>
              <button className='btn-home'>MOSTRAR AHORA</button>
            </NavLink>

            <SvgWave />
        </div>

        <h2 className="subtitle">Productos Destacados</h2>
        <div className="content-items-grid">
            {
              data.featureProducts.map(item => (
                <ItemList key={item.id} {...item}/>
              ))
            }
        </div>

        <div className='content-services'>
          <h2 className='subtitle'>Por qué elegirnos</h2>

          <div className="content-items-grid">
            <CardService
            title='Envío al mundo entero'
            description='We offer worldwide shipping to make our products accessible to customers all over the world.'
            image={<SvgWorld />} />

            <CardService
            title='Mejor calidad'
            description='We believe in providing our customers with only the best quality products.'
            image={<SvgQuality />} />

            <CardService
            title='Mejores ofertas'
            description='We pride ourselves on offering the best deals and discounts to our customers.'
            image={<SvgOffers />}/>

            <CardService
            title='Pagos seguros'
            description='We offer a range of secure payment options to ensure that your transactions are safe and secure.'
            image={<SvgSecure />}/>

          </div>
        </div>
    </>
   
  )
}

export default AppHome
