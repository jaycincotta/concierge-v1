import React, { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"
import { Link } from "react-router-dom"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"

function Details({ part }) {
    const details = part.details
    const keys = Object.keys(details)
    return <>
        {keys.map(item => <><div key={item + "Label"}>{item}:</div><div key={item + "Value"}><b>{details[item]}</b></div></>)}
    </>
}

function Card({ part, removeItem }) {
    const [open, setOpen] = useState(false)
    const icon = part.price > 0
        ? <i className="fa-regular fa-thumbs-up" />
        : <i className="fa-regular fa-magnifying-glass-dollar" />

    return <div className="card">
        <div><span className="button" onClick={() => setOpen(!open)}>{open
            ? <i className="fa-regular fa-chevron-up" />
            : <i className="fa-regular fa-chevron-down" />}&nbsp;&nbsp;{icon}&nbsp;</span> {part.partId}: {part.description}</div>
        <div className="price">{part.price ? "$" + part.price : ""}</div>
        <div className="button" onClick={(e) => { e.stopPropagation(); setOpen(false); removeItem(part) }}>
            <i className="fa-regular fa-xmark" />
        </div>
        <div className="details">{open && <Details part={part} />}</div>
    </div>
}

export default function Cart() {
    const { cart, removeItem } = useContext(AppContext)

    const cartType = (function () {
        if (cart.length === 0) return "empty"

        const priced = cart.filter(item => item.price > 0).length
        const unpriced = cart.length - priced
        if (priced > 0 && unpriced === 0) return "priced"
        if (priced === 0 && unpriced > 0) return "unpriced"
        return "mixed"
    })()

    return (
        <Task task="Shopping Cart" className="black-on-blue">
            <TaskStep step={cartType}>
                <h1><i className="fa-regular fa-cart-shopping" /> Shopping Cart</h1>
                {cartType === "empty" && <p>Your cart is empty.</p>}
                {cartType === "priced" && <p>
                    We carry everything you need! Click the Purchase button to continue checkout.
                </p>}
                {cartType === "unpriced" && <p>
                    We are happy to looking into this for you. Click the Submit Request button and
                    we will get back to you with a quote.
                </p>}
                {cartType === "mixed" && <p>
                    We are happy to looking into this for you. Click the Submit Request button and we
                    will get back to you with a quote including both the stock and research items you need.
                </p>}
                <div className="searchResults">
                    {cart.map((part, index) => <Card key={index} part={part} removeItem={removeItem} />)}
                </div>
                <div className="center pad">
                    {cartType === "empty" && <Link to="/"><button>Continue</button></Link>}
                    {cartType === "priced" && <Link to="/Purchase"><button>Checkout</button></Link>}
                    {cartType === "unpriced" && <Link to="/Quote"><button>Submit Quote</button></Link>}
                    {cartType === "mixed" && <Link to="/Quote"><button>Submit Quote</button></Link>}
                    <p><Link to="/">Continue Shopping</Link></p>
                </div>
            </TaskStep>
        </Task>
    )
}