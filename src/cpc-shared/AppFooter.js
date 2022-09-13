import React from "react"

const Location = ({branch, phone, hours}) => (
    <div className="location">
        <div className="branch">{branch}</div>
        <div className="phone">{phone}</div>
        <div className="hours">{hours}</div>
    </div>
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
            <Location branch="Los Angeles" phone="(800) 421-0271" hours="7:30am-5pm PT" />
            <Location branch="St Louis" phone="(800) 423-9337" hours="7am-4:30pm ET" />
            <Location branch="Seattle" phone="(800) 715-3416" hours="7:30am-5pm PT" />
        </div>
        <div>&copy;2022 Celsius Joint Venture</div>
    </footer>
}