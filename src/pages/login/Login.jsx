import React, { useState } from 'react'
import './login.css'
import { useAuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isRegistrando, setIsRegistrando] = useState(false);
  const {handleInputChange,values,handleSubmit,error} = useAuthContext();
  const navigate = useNavigate();
  
  return (
    <div className='logueo'>
      <h2 className='logueo__subtitle'>{isRegistrando ? 'Registrate' : 'Iniciar sesión'}</h2>
      
        <form className='form' onSubmit={(e)=>handleSubmit(e, isRegistrando, navigate)}>
            <div className="form__group">
                <label htmlFor="email">Email</label>
                <input className='input' type="text" id='email' name='email' value={values.email} onChange={handleInputChange} required />
            </div>

            <div className="form__group">
                <label htmlFor="password">Contraseña</label>
                <input className='input' type="password" id='password' name='password' value={values.password} onChange={handleInputChange} required />
            </div>

            <button type='submit'>
                {isRegistrando ? 'Resgistrate' : 'Inicia sesión'}
            </button>
            
        </form>

        <p className={error ?'activeError logueo__error' : 'logueo__error'}>{error}*</p>

        <button className='logueo__btn' onClick={()=> setIsRegistrando(!isRegistrando)}>
                {isRegistrando ? '¿Ya tienes cuenta? ¡Inicia sesión!' : '¿No tienes cuenta? ¡Registrate gratis!'}
        </button>
    </div>
  )
}

export default Login