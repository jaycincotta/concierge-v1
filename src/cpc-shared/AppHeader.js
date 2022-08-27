import React from "react"
import "./cpc-styles.css"
import Burger from "./Burger"

export default function AppHeader({ appname, menu }) {
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
        </div>
    )
}