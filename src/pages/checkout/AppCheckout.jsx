import { useCartContext } from '../../context/CartContext'
import './appCheckout.css'

const AppCheckout = () => {
     const {state,handleInputChange,sendForm,errors} = useCartContext();
    

  return (
    <div className='column-form'>
        <h2 className='sub-title'>Completa el formulario</h2>
        <form className='form' onSubmit={sendForm}>
           <div className='form__group'>
                <label htmlFor="name">Nombre</label>
                <input type="text" id='name' name='name' value={state.user.name} onChange={handleInputChange} autoComplete="name"/>
                {errors.name ? <p className='errorActive'>{errors.name}</p> : <p className='error'>mensaje error</p>}
           </div>

           <div className='form__group'>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' name='email' value={state.user.email} onChange={handleInputChange} autoComplete="email" />
                {errors.email ? <p className='errorActive'>{errors.email}</p> : <p className='error'>mensaje error</p>}
           </div>

           <div className='form__group'>
                <label htmlFor="fhone">Teléfono</label>
                <input type="text" id='fhone' name='fhone' value={state.user.fhone} onChange={handleInputChange} autoComplete="tel" />
                {errors.fhone ? <p className='errorActive'>{errors.fhone}</p> : <p className='error'>mensaje error</p>}
           </div>

           <div className='form__group'>
                <label htmlFor="addres">Direccíon</label>
                <input type="text" id='addres' name='addres' value={state.user.addres} onChange={handleInputChange} autoComplete="address" />
                {errors.addres ? <p className='errorActive'>{errors.addres}</p> : <p className='error'>mensaje error</p>}
           </div>

           <button className={state.cart.length ? 'confir': 'confir disab'} type='submit' disabled={state.cart.length ? '' : 'disabled'}>Confirmar compra</button>
        </form>
    </div>
  )
}

export default AppCheckout
