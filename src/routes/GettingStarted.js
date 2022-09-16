import React, { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"

export default function GettingStarted() {
    const { user } = useContext(AppContext)

    return (
        <Task task="Getting Started" className="black-on-blue-gradient">
            <TaskStep step="1">
                <h1>Welcome!</h1>
                <p>
                    This app is optimized for your phone to make it fast and easy to request quotes from Case Parts for commercial refrigeration parts.
                </p>
                <p>
                    Click Play for step-by-step instructions on using this app.
                </p>

            </TaskStep>
            <TaskStep step="2">
                <h1>Good Job!</h1>
                <p>You're getting the hang of using the player control buttons. This is important because
                    context-sensitive video help is always available in Case Parts Concierge</p>
            </TaskStep>
            <TaskStep step="3">
                {user &&
                    <div>
                        <h1>Good to see you, {user.email}!</h1>
                        <p>You're logged into your Case Parts account: {user.custId}</p>
                    </div>
                }
                {!user &&
                    <div>
                        <h1>Which best describes you?</h1>
                        <ul>
                            <li>I'm new to Case Parts</li>
                            <li>I'm familiar with Case Parts but have never placed an order</li>
                            <li>I've bought from Case Parts before, but I'm not registered on the website</li>
                            <li>I have a CustomerID, but I'm not registered on the website</li>
                            <li>I'm registered with caseparts.com, but don't have a CustomerID</li>
                            <li>I have a CustomerID and am registered on caseparts.com</li>
                            <li>I'd rather not answer this question</li>
                        </ul>
                    </div>
                }
            </TaskStep>
            <TaskStep step="4">
                <p>TBD</p>
            </TaskStep>
        </Task>
    )
}