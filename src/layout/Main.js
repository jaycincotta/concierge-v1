import React from "react"
import { Outlet } from "react-router-dom"
import AppHeader from "../cpc-ui/AppHeader"

export default function Layout() {
    return (
        <div className="App">
            <AppHeader appname="Concierge" />
            <Outlet />
        </div>
    )
}