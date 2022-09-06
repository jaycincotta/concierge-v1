import React from "react"
import { AppContext } from "./AppContext"
import useLocalStorage from "../cpc-shared/useLocalStorage"

export default function AppState({ children }) {
    const [cart, setCart] = useLocalStorage("cart", [])
    const [user, setUser] = useLocalStorage("user", null)

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

    function login(user) {
        setUser(user)
    }

    function logout() {
        setUser(null)
    }

    return (
        <AppContext.Provider
            value={{
                cart: cart,
                addItem,
                removeItem,
                clearCart,

                user,
                login,
                logout
            }}
        >
            {children}
        </AppContext.Provider>
    )
}