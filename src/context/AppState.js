import React from "react"
import { AppContext } from "./AppContext"
import useLocalStorage from "../cpc-shared/useLocalStorage"

export default function AppState({ children }) {
    const [cart, setCart] = useLocalStorage("quote-cart", [])

    function addItem(item) {
        setCart([...cart, item])
    }

    function removeItem(item) {
        const json = JSON.stringify(item)
        setCart(cart.filter(i => JSON.stringify(i) !== json))
    }

    function clearCart() {
        setCart([])
    }

    return (
        <AppContext.Provider
            value={{
                cart: cart,
                addItem,
                removeItem,
                clearCart
            }}
        >
            {children}
        </AppContext.Provider>
    )
}