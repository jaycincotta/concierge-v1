import React from "react"
import TaskPlus from "../layout/Task"
import ContactInfo from "../components/ContactInfo"
export default function GettingStarted() {
    const params = new URLSearchParams(window.location.search)
    const custId = params.get("custId")
    const firstName = params.get("name")

    const videos = [
        "https://vimeo.com/741705223/5ca0983480", // 0: Jay Tutorial 1
        "https://vimeo.com/741706003/e3d8e3e09e", // 1: Jay Tutorial 2
        "https://vimeo.com/741707007/4f8ad9f04e", // 2: Jay Tutorial 3 Authenticated
        "https://vimeo.com/741707199/4a0bc9ed43", // 3: Jay Tutorial 3 Anonymous
        "https://vimeo.com/741709927/50f90a416e", // 4: Jay Tutorial 4
        "https://vimeo.com/741710210/c85fceae30"  // 5: Jay Home 1
    ]


    const step3 = custId
        ? {
            name: "Jay Tutorial 3 Authenticated",
            video: videos[2],
            jsx: () => <div>
                {firstName && <h1>Good to see you, {firstName}!</h1>}
                {!firstName && <h1>Good to see you!</h1>}
                <p>You're logged into your Case Parts account: {custId}</p>
            </div>
        }
        : {
            name: "Jay Tutorial 3 Anonymous",
            video: videos[3],
            jsx: () => <div>
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

    const steps = [
        {
            name: "Jay Tutorial 1",
            video: videos[0],
            jsx: () => <div>
                <h1>Welcome!</h1>
                <p>
                    This app is optimized for your phone to make it fast and easy to request quotes from Case Parts for commercial refrigeration parts.
                </p><p>
                    Click Play for step-by-step instructions on using this app.
                </p>
            </div>
        },
        {
            name: "Jay Tutorial 2",
            video: videos[1],
            jsx: () => <div>
                <h1>Good Job!</h1>
                <p>You're getting the hang of using the player control buttons. This is important because
                    context-sensitive video help is always available in Case Parts Concierge</p>
            </div>
        },
        step3,
        {
            name: "4: Jay Tutorial 4",
            video: videos[4],
            jsx: () => <ContactInfo />
        }
    ]

    return (
        <TaskPlus title="Test" steps={steps} />
    )
}