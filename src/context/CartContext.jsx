import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useProductContext } from "./ProductContext";
import { cartReducer } from "../reducer/cartReducer";
import Swal from 'sweetalert2';
import validation from "../hooks/validation";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function getLocalCartData() {
    return JSON.parse(localStorage.getItem('item-cart')) || []
}

const initialState = {
    cart: getLocalCartData(),
    totalItems: 0,
    totalPrice: 0,
    user: {name:'', email:'', fhone:'', addres:''}
}

const CartContext = createContext();

const CartProvider = ({children}) => {
    const {data} = useProductContext();
    const [state,dispach] = useReducer(cartReducer,initialState);
    const [errors, setErrors] = useState({});

    function handleAdd(id,amount,setAmount) {
        if (amount > 0) {
            dispach({
                type:'ADD_TO_CART',
                payload:{data,id,amount}
            })
            setAmount(0);
            handleItemsTotal();
            handlePriceTotal();

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Agregado al carrito',
                showConfirmButton: false,
                timer: 1400
              })
            return;
        }

        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Elija una cantidad',
            showConfirmButton: false,
            timer: 1400
          })
    }

    function handleDelete(id) {
        dispach({
            type:'REMOVE_ONE_FROM_CART',
            payload:id
        })
        handleItemsTotal();
        handlePriceTotal();
    }

    function handleIncrement(id) {
        dispach({
            type: 'INCREMENT_ONE_ITEM_FROM_CART',
            payload: id
        })
        handleItemsTotal();
        handlePriceTotal();
    }

    function handleDecrement(id) {
        dispach({
            type: 'DECREMENT_ONE_ITEM_FROM_CART',
            payload: id
        })
        handleItemsTotal();
        handlePriceTotal();
    }

    function handleItemsTotal() {
        dispach({
            type: 'TOTAL_ITEMS_CART'
        })
    }

    function handlePriceTotal() {
        dispach({
            type: 'TOTAL_PRICE_OF_PRODUCTS'
        })
    }

    function handleClearCart() {
        dispach({
            type: 'CLEAR_CART'
        })
    }

    function handleInputChange(e) {
        const {name,value} = e.target
        dispach({
            type: 'VALUE_INPUT_CHECKOUT',
            payload: {name,value}
        })
    }

    function sendForm(e) {
        e.preventDefault();
        setErrors(validation(state.user));
    }

    // CREATE ORDER
    const order = {
        buyer: state.user,
        item: state.cart.map(item => ({id: item.id, title: item.title, price: item.price, quantity: item.quantity})),
        total: state.totalPrice
    }

    // ADD ORDER FIREBASE
    function handleAddOrder() {
        const db = getFirestore();
        addDoc(collection(db,'orders'),order)
        .then(({id}) => console.log(id));
    }

    // si no hay errores en el form se enviaran los datos a fireStore
    useEffect(()=>{
        const {name,email,fhone,addres} = state.user;
        if (Object.keys(errors).length === 0 && (name !== '' && email !== '' && fhone !== '' && addres !== '' )) {
            Swal.fire(
                'Gracias!',
                'Compra exitosa',
                'success'
            )
            dispach({type:'RESET_FORM'});
            handleAddOrder();
            handleClearCart();
        }
    },[errors]);


     // ADD LOCAL STORAGE
    useEffect(()=>{
        localStorage.setItem('item-cart', JSON.stringify(state.cart));
        handleItemsTotal();
        handlePriceTotal();
    },[state.cart]);


    return (
        <CartContext.Provider value={{state,handleAdd,handleDelete,handleIncrement,handleDecrement,handleClearCart,handleInputChange,sendForm,errors}}>
            {children}
        </CartContext.Provider>
    )
}

// custon hook 
const useCartContext = () => useContext(CartContext);
export {CartProvider,useCartContext};