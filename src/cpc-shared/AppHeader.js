import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Burger from "./Burger"
import { AppContext } from "../context/AppContext"
import { AuthContext } from "../context/AuthContext"

export default function AppHeader({ appname, menu }) {
    const { cart, showVideo, setShowVideo } = useContext(AppContext)
    const { email } = useContext(AuthContext)
    const navigate = useNavigate()

    return (
        <header className="cpc-mainnav">
            <div className="black-padding" />
            <div className="page-width">
                <div className="cpc-logo" onClick={() => navigate("/")}>
                    <img className="cpc-logo-front" src="/assets/logo-front.svg" alt="" />
                    <div className="cpc-appname">
                        <div className="cpc-company">CaseParts</div>
                        {appname}
                    </div>
                </div>
                <img className="cpc-logo-back" src="/assets/logo-back.svg" alt="" />
                <Burger menu={menu} />
                <button onClick={() => { if (cart.length > 0) navigate("/cart") }}>
                    <div className={"overlay " + (cart.length > 0 ? "show" : "hide")}>{cart.length}</div>
                    <i className="fa-regular fa-cart-shopping"></i>
                </button>
                {!showVideo && <button onClick={() => setShowVideo(true)}><i className="fa-brands fa-youtube" /> </button>}
                {email && <button onClick={() => navigate("/account")}><i className="fa-solid fa-user" /></button>}
                {!email && <div className="loginButton" onClick={() => navigate("/login")}>Login</div>}
            </div>
        </header>
    )
}
