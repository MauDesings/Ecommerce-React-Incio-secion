import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/NavBar'
import AppHome from './pages/home/AppHome';
import Footer from './components/footer/Footer';
import AppProduct from './pages/product/AppProduct';
import AppCategorie from './pages/categorie/AppCategorie';
import CategoryProductList from './pages/categoryProductList/CategoryProductList';
import AppCart from './pages/cart/AppCart';
import AppCheckout from './pages/checkout/AppCheckout';
import Login from './pages/login/Login';
import { useAuthContext } from './context/AuthContext';

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
                    <Routes >
                        <Route exact path='/' element={<AppHome greeting={greeting} />}/>
                        <Route exact path='/product' element={<AppProduct />}/>
                        <Route exact path='/categories' element={<AppCategorie />}/>
                        <Route exact path='/category/:categoryId' element={<CategoryProductList />}/>
                        <Route exact path='/Cart' element={<AppCart />}/>
                        <Route 
                            exact 
                            path='/checkout' 
                            element={user ? <AppCheckout /> : <Navigate to='/login' />} 
                            />
                            <Route exact path='/login' element={<Login />} />
                    </Routes>
                </div>
            </section>
        </main>

        <Footer />
    </>
  )
}

export default App
