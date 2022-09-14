import React from "react"
import { Link } from "react-router-dom"

const Location = ({ branch, phone, hours, url }) => (
    <Link to={url}>
        <div className="location">
            <div className="branch">{branch}</div>
            <div className="phone">{phone}</div>
            <div className="hours">{hours}</div>
        </div>
    </Link>
)

/*
        <div className="locations">
            <Location branch="Los Angeles" phone="(800) 421-0271" hours="M-F 7:30am-5:00pm PT" />
            <Location branch="St Louis" phone="(800) 423-9337" hours="M-F 7:00am-4:30pm ET" />
            <Location branch="Seattle" phone="(800) 715-3416" hours="M-F 7:30am-5:00pm PT" />
        </div>

*/
export default function AppFooter() {
    return <footer>
        <div className="locations">
            <Location branch="Los Angeles" phone="(800) 421-0271" hours="7:30am-5pm PT" url="/branch/mpk" />
            <Location branch="St Louis" phone="(800) 423-9337" hours="7am-4:30pm ET" url="/branch/stl" />
            <Location branch="Seattle" phone="(800) 715-3416" hours="7:30am-5pm PT" url="/branch/sea" />
        </div>
        <div>&copy;2022 Celsius Joint Venture</div>
    </footer>
}