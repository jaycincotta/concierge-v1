import React, {useContext} from "react"
import { useNavigate } from "react-router-dom"
import Burger from "./Burger"
import { AppContext } from "../context/AppContext"

export default function AppHeader({ appname, menu }) {
    const { cart, user } = useContext(AppContext)
    const navigate = useNavigate()

    return (
        <header className="cpc-mainnav">
            <div className="cpc-logo" onClick={()=>navigate("/")}>
                <img className="cpc-logo-front" src="/assets/logo-front.svg" alt="" />
                <div className="cpc-appname">
                    <div className="cpc-company">CaseParts</div>
                    {appname}
                </div>
            </div>
            <img className="cpc-logo-back" src="/assets/logo-back.svg" alt="" />
            <Burger menu={menu} />

            <button onClick={()=>{ if (cart.length > 0) navigate("/cart")}}>
                <div className={"overlay " + (cart.length > 0 ? "show" : "hide")}>{cart.length}</div>
                <i className="fa-regular fa-cart-shopping"></i>
            </button>
            {user && <button onClick={()=>navigate("/account")}><i className="fa-solid fa-user"></i></button>}
            {!user && <div className="button" onClick={()=>navigate("/login")}>Login</div>}
        </header>
    )
}
