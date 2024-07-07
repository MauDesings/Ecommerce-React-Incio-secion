import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { useAuthContext } from './context/AuthContext';

// Importación dinámica
const AppHome = lazy(() => import('./pages/home/AppHome'));
const AppProduct = lazy(() => import('./pages/product/AppProduct'));
const AppCategorie = lazy(() => import('./pages/categorie/AppCategorie'));
const CategoryProductList = lazy(() => import('./pages/categoryProductList/CategoryProductList'));
const AppCart = lazy(() => import('./pages/cart/AppCart'));
const AppCheckout = lazy(() => import('./pages/checkout/AppCheckout'));
const Login = lazy(() => import('./pages/login/Login'));

function App() {
    const { user } = useAuthContext();
    const greeting = 'Te Damos La Bienvenida a';

    return (
        <>
            <header className='header'>
                <NavBar />
            </header>

            <main>
                <section className="section">
                    <div className="container">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route exact path='/' element={<AppHome greeting={greeting} />} />
                                <Route exact path='/product' element={<AppProduct />} />
                                <Route exact path='/categories' element={<AppCategorie />} />
                                <Route exact path='/category/:categoryId' element={<CategoryProductList />} />
                                <Route exact path='/Cart' element={<AppCart />} />
                                <Route 
                                    exact 
                                    path='/checkout' 
                                    element={user ? <AppCheckout /> : <Navigate to='/login' />} 
                                />
                                <Route exact path='/login' element={<Login />} />
                            </Routes>
                        </Suspense>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;

