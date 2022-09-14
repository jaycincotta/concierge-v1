import React from "react"
import { Link } from "react-router-dom"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"

export default function Welcome() {

    return (
        <Task task="">
            <TaskStep step="1">
                <>
                    <div className="section black-on-blue-gradient">
                        <h1>Welcome to Case Parts!</h1>
                        <div className="subtitle">The Commercial Refrigeration Parts Experts</div>
                        <p>
                            We make it easy for you get parts <b>quickly and at a fair price</b> -- even when you're not sure what parts you need!
                        </p>
                        <p>
                            We're a family-owned business spanning four generations and 50 years of service with three locations nationwide to get you your parts <b>faster and cheaper</b>.
                        </p>
                        <p>
                            Our Customer Service Reps average more than 12 years experience at Case Parts providing <b>exceptional customer service</b>. They know what questions to ask and where to go to solve your problems!
                        </p>
                        <p>
                            We appreciate you giving us a chance to serve you.
                        </p>
                        <h2>How can we help you today?</h2>
                        <div className="pad center">
                            <Link to="/"><button>Continue <i className="fa-solid fa-arrow-right" /></button></Link>
                        </div>
                    </div>
                </>
            </TaskStep>
        </Task>
    )
}