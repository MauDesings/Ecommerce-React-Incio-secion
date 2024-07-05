import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import {app} from './hooks/config.js'

console.log(app)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ProductProvider>
            <CartProvider>
                <AuthProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </AuthProvider>
            </CartProvider>
        </ProductProvider>
    </React.StrictMode>,
)
