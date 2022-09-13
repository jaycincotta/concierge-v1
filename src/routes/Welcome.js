import React from "react"
// import { Link } from "react-router-dom"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"
import ContactInfo from "../components/ContactInfo"

export default function Welcome() {

    return (
        <Task task="">
            <TaskStep step="1">
                <>
                    <div className="section black-on-blue-gradient">
                        <h1>Welcome to Case Parts!</h1>
                        <p>
                            We make it fast &amp; easy to get you <b>commercial refrigeration parts</b> quickly and at a fair price -- even when you're not sure what parts you need!
                        </p>
                        <p>
                            We're a family-owned business that has prided ourselves on providing <b>exceptional customer service</b> spanning four generations and more than 50 years!
                            </p><p>
                            We have three locations nationwide to get you your parts <b>faster and cheaper</b> and Customer Service Reps with an average of over 12 years experience helping customers.
                            They know what questions to ask and where to go to solve your problems!

                        </p>
                        <button>How can we help you today?</button>
                    </div>
                </>
            </TaskStep>
        </Task>
    )
}