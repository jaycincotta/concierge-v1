import React, { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"
import { Link } from "react-router-dom"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"

function Details({part}) {
    const details = part.details
    const keys = Object.keys(details)
    return <>
        {keys.map(item => <><div>{item}:</div><div><b>{details[item]}</b></div></>)}
    </>
}

function Card({ part, removeItem }) {
    const [open, setOpen] = useState(false)
    const icon = part.itemType === "spo" 
    ? <i className="fa-duotone fa-magnifying-glass-dollar"/> 
    : <i className="fa-solid fa-check" />

    return <div className="card">
        <Link to={"/part/" + part.partId}><div>{icon} {part.partId}: {part.description}</div></Link>
        <div onClick={() => setOpen(!open)}>{part.price ? "$" + part.price : ""}</div>
        <div onClick={() => setOpen(!open)}>
            {open
                ? <i className="fa-regular fa-chevron-up" />
                : <i className="fa-regular fa-chevron-down" />}
            &nbsp;&nbsp;<i onClick={(e)=>{e.stopPropagation(); setOpen(false); removeItem(part)}} className="fa-regular fa-xmark" />
        </div>
        <div className="details">{open && <Details part={part}/>}</div>
    </div>
}

export default function Cart() {
    const { cart, removeItem } = useContext(AppContext)

    return (
        <Task task="Shopping Cart" className="black-on-blue">
            <TaskStep step="1">
                <div className="searchResults">
                    {cart.map((part, index) => <Card key={index} part={part} removeItem={removeItem} />)}
                </div>
            </TaskStep>
        </Task>
    )
}