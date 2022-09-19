import React, { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Outlet, Link, useNavigate } from "react-router-dom"
import AppHeader from "../cpc-shared/AppHeader"
import AppFooter from "../cpc-shared/AppFooter"

function getPhone(branch) {
    switch(branch) {
        case "MPK": return "3237296000"
        case "STL": return "3147399694"
        case "SEA": return "2538544900"
        default: return ""
    }
}

const Contact = ({branch}) => {
    const phone = getPhone(branch)
    if (!phone) return ""

    return <>
        <a href={"tel:" + phone}><li><i className="fa-solid fa-phone" /> Call {branch}</li></a>
        <a href={"sms:" + phone}><li><i className="fa-sharp fa-solid fa-message-sms" /> Text {branch}</li></a>
    </>
}

export default function Layout() {
    const { user, logout, showVideo, setShowVideo, branch } = useContext(AppContext)
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
            <Contact branch={branch} />
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