import React from "react"
//import { Link } from "react-router-dom"
import Task from "../layout/Task"

export default function RequestQuote() {
    const steps = [
        {
            jsx: () => <>
                <h1>Request Quote</h1>
                <p className="voiceover">Your quote can include as many parts as you need but let's go through them one at a time. If you know the part number, use Part Search. Otherwise, pick the research option.</p>
                <div className="menu">
                    <button>Part Search: Find a part by part number</button>
                    <button>Research Request: Describe the part and we'll find the part number</button>
                </div>
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