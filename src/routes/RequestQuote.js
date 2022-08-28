import React, { useContext} from "react"
import { AppContext } from "../context/AppContext"
//import { Link } from "react-router-dom"
import Task from "../layout/Task"
import useLocalStorage from "../cpc-shared/useLocalStorage"

export default function RequestQuote() {
    const { cart, addItem, clearCart} = useContext(AppContext)
    const [input, setInput] = useLocalStorage("quote-partId", "")

    function add() {
        const item = { part: { partId: input} }
        addItem(item)
        setInput("")
    }
    function clear() {
        setInput("")
        clearCart([])
    }

    const videos = [
        "https://vimeo.com/741710210/c85fceae30"  // Jay Home 1
    ]

    const steps = [
        {
            video: videos[0],
            jsx: () => <>
                <h1>Request Quote</h1>
                <p className="voiceover">Your quote can include as many parts as you need but let's go through them one at a time. If you know the part number, use Part Search. Otherwise, pick the research option.</p>
                <div className="menu">
                    <button>Part Search: Find a part by part number</button>
                    <button>Research Request: Describe the part and we'll find the part number</button>
                </div>
                <input value={input} onChange={e => setInput(e.target.value)} />
                <button onClick={add}>Add to Cart</button>
                <button onClick={clear}>Clear Cart</button>
            </>
        },
        {
            jsx: () => <>
                <h1>Part Search</h1>
                <p className="voiceover">Great, just enter the part number and click next.</p>
                <input type="text"/>
            </>
        },
        {
            jsx: () => <>
                <h1>Confirm Part</h1>
                <p className="voiceover">Is this the part you're looking for? If so, click next to continue. Otherwise, pick another option.</p>
                <div className="menu">
                    <button>Enter a different part number</button>
                    <button>I'm not sure about the part number, but I can describe what I need</button>
                    <button>I'd prefer to have a customer representative call me</button>
                </div>
            </>
        },
       ]

    return (
        <Task title="Request a Quote" steps={steps} />
    )
}