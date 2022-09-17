import React from "react"
import { AppContext } from "./AppContext"
import useLocalStorage from "../cpc-shared/useLocalStorage"

export default function AppState({ children }) {
    const [cart, setCart] = useLocalStorage("cart", [])
    const [user, setUser] = useLocalStorage("user", null)
    const [plays, setPlays] = useLocalStorage("plays", {})
    const [showVideo, setShowVideo] = useLocalStorage("showVideo", true)

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

    const playDelimiter = " | "

    function playCount(task, step) {
        const key = task + playDelimiter + step
        return plays[key] ? plays[key] : 0
    }

    function incrementPlayCount(task, step) {
        const key = task + playDelimiter + step
        const count = playCount(task, step) + 1
        const clone = {...plays}
        clone[key] = count
        console.log("incrementPlayCount", task, step, count)
        setPlays(clone)
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
                logout,

                playCount,
                incrementPlayCount,

                showVideo,
                setShowVideo
            }}
        >
            {children}
        </AppContext.Provider>
    )
}