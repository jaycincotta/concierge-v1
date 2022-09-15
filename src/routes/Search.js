import React, { useState } from "react"
import { Link } from "react-router-dom"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"
import searchResults from "../data/searchResults"

function Details({part}) {
    const details = part.details
    const keys = Object.keys(details)
    return <>
        {keys.map(item => <><div>{item}:</div><div><b>{details[item]}</b></div></>)}
    </>
}
function Card({ part }) {
    const [open, setOpen] = useState(false)
    return <div className="card">
        <Link to={"/part/" + part.partId}><div>{part.partId}: {part.description}</div></Link>
        <div>${part.price}</div>
        <div className="button" onClick={() => setOpen(!open)}>
            {open
                ? <i className="fa-regular fa-chevron-up" />
                : <i className="fa-regular fa-chevron-down" />}
        </div>
        <div className="details">{open && <Details part={part}/>}</div>
    </div>
}

export default function Search({ query }) {
    const results = searchResults()
    console.log(results)
    return (
        <Task task="Search" className="black-on-blue">
            <TaskStep step="1">
                <div className="searchResults">
                    {results.map((part, index) => <Card key={index} part={part} />)}
                </div>
            </TaskStep>
        </Task>
    )
}