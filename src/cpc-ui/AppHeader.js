import React from "react"
import "./cpc-styles.css"

export default function AppHeader({appname}) {
    return (
        <div className="cpc-mainnav">
            <div className="cpc-logo">
                <img className="cpc-logo-front" src="/assets/logo-front.svg" />
                <div className="cpc-appname">
                    <div className="cpc-company">CaseParts</div>
                    {appname}
                </div>
            </div>
            <img className="cpc-logo-back" src="/assets/logo-back.svg" />
        </div>
    )
}