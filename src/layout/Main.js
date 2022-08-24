import React from "react"
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <div className="App">
            <h1 className="nav">CaseParts<span className="thin">Concierge</span></h1>
            <Outlet />
        </div>
    )
}