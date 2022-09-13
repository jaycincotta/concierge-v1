import React from "react"
import { Outlet, Link } from "react-router-dom"
import AppHeader from "../cpc-shared/AppHeader"
import AppFooter from "../cpc-shared/AppFooter"

export default function Layout() {
    const menu = (
        <ul>
            <li className="selectable"><Link to="/">Home</Link></li>
            <li className="selectable"><Link to="/welcome">Welcome</Link></li>
            <li className="selectable"><Link to="/quote">Quote</Link></li>
            <li className="selectable"><Link to="/getting-started">Help</Link></li>
            <li className="selectable"><Link to="/contact">Contact</Link></li>
        </ul>
    )
    return (
        <div className="App">
            <AppHeader appname="Concierge" menu={menu} />
            <Outlet />
            <AppFooter />
        </div>
    )
}