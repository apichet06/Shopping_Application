import { createContext, useContext, useReducer, useEffect } from "react";
import products from "../data/products";
import cartReducer from "../reducer/cartReducer"
// การสร้าง Context
const CartContext = createContext()
const initState = {
    products: products,
    total: 0,
    amount: 0,
}
// class Provider


export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initState)
    function formatMoney(money) {
        return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    function addQuantity(id) {

        dispatch({ type: "ADD", payload: id })

    }

    function subtractQauntity(id) {
        dispatch({ type: "SUBTRACT", payload: id })
    }


    function removeItem(id) {
        dispatch({ type: "REMOVE", payload: id })
    }

    useEffect(() => {
        console.log("คำนวนหาผลรวม");
        dispatch({ type: "CALCULATE_TOTAL" })
    }, [state.products])
    return (
        <CartContext.Provider value={{ ...state, formatMoney, removeItem, addQuantity, subtractQauntity }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => {

    return useContext(CartContext)
}