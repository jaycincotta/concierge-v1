import React from "react"
import { Outlet, Link } from "react-router-dom"
import AppHeader from "../cpc-ui/AppHeader"

export default function Layout() {
    const menu = (
        <ul>
            <li className="selectable"><Link to="/">Home</Link></li>
            <li className="selectable"><Link to="/quote">Quote</Link></li>
            <li className="selectable"><Link to="/getting-started">Getting Started Tutorial Just for you!</Link></li>
            <li className="selectable"><Link to="/contact">Contact</Link></li>
        </ul>
    )
    return (
        <div className="App">
            <AppHeader appname="Concierge" menu={menu} />
            <Outlet />
        </div>
    )
}