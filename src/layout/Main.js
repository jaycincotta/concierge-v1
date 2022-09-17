import React, { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Outlet, Link, useNavigate } from "react-router-dom"
import AppHeader from "../cpc-shared/AppHeader"
import AppFooter from "../cpc-shared/AppFooter"

export default function Layout() {
    const { user, logout, showVideo, setShowVideo } = useContext(AppContext)
    const navigate = useNavigate()
    const signOut = () => {
        logout()
        navigate("/")
    }

    const menu = (<>
        <ul>
            <li className="selectable"><Link to="/">Home</Link></li>
            <li className="selectable"><Link to="/welcome">Welcome</Link></li>
            <li className="selectable"><Link to="/getting-started">Help</Link></li>
        </ul>
        <hr />
        <ul>
            <li className="selectable" onClick={() => setShowVideo(!showVideo)}>
                <i className="fa-brands fa-youtube" /> {showVideo ? "Hide" : "Show"} Video
            </li>
            {user && <li className="selectable" onClick={signOut}>Sign Out</li>}
        </ul>
    </>)
    return (
        <div className="App">
            <AppHeader appname="Company" menu={menu} />
            <Outlet />
            <AppFooter />
        </div>
    )
}