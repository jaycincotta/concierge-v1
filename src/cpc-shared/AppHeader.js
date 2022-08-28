import React, {useContext} from "react"
import Burger from "./Burger"
import { AppContext } from "../context/AppContext"

export default function AppHeader({ appname, menu }) {
    const { cart } = useContext(AppContext)

    return (
        <div className="cpc-mainnav">
            <div className="cpc-logo">
                <img className="cpc-logo-front" src="/assets/logo-front.svg" alt="" />
                <div className="cpc-appname">
                    <div className="cpc-company">CaseParts</div>
                    {appname}
                </div>
            </div>
            <img className="cpc-logo-back" src="/assets/logo-back.svg" alt="" />
            <Burger menu={menu} />

            <button><div className={"overlay " + (cart.length > 0 ? "show" : "hide")}>{cart.length}</div><i className="fa-regular fa-cart-shopping"></i></button>
        </div>
    )
}
