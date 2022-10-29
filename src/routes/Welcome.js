import React from "react"
import { Link } from "react-router-dom"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"
import useLocalStorage from "../hooks/useLocalStorage"

export default function Welcome() {
    const [seenWelcome, setSeenWelcome, user] = useLocalStorage("seenWelcome", false)

    if (!seenWelcome) {
        setSeenWelcome(true)
    }
    
    return (
        <Task task="Welcome" className="black-on-blue-gradient">
            <TaskStep>
                <>
                    <div className="section ">
                        <h1>Welcome to Case Parts!</h1>
                        <div className="subtitle">The Commercial Refrigeration Parts Experts</div>
                        <p>
                            We can get you parts <b>quickly and at a fair price</b> -- even when you're not sure what parts you need!
                        </p>
                        <p>
                            We're a family-owned business spanning four generations and 50 years of service with three locations nationwide to deliver your parts <b>faster and cheaper</b>.
                        </p>
                        <p>
                            Our Customer Service Reps average more than 12 years experience providing <b>exceptional customer service</b>. They know what questions to ask and where to go to solve your problems!
                        </p>
                        <p>
                            We appreciate you giving us a chance to serve you.
                        </p>
                        {!user && <div className="annotation">
                            <i className="fa-solid fa-lightbulb-exclamation-on"/>
                            <p>If you already have a Case Parts account, <Link to="/Login">Login</Link> to ensure accurate pricing and access additional features.</p>
                        </div>}
                        <h2>How can we help you today?</h2>
                        <div className="pad center">
                            <Link to="/"><button>Continue <i className="fa-solid fa-arrow-right" /></button></Link>
                        </div>
                    </div>
                    <img src="/images/catalogpage.png" alt=""/>
                </>
            </TaskStep>
        </Task>
    )
}