import React from "react"
// import { Link } from "react-router-dom"
import Task from "../layout/Task"
import pick from "../functions/pick"

export default function HomePage() {
    const videos = [
        "https://vimeo.com/741710210/c85fceae30"  // Jay Home 1
    ]

    var video = pick(videos);

    const steps = [
        {
            video: video,
            jsx: () => <>
                <div className="section black-on-blue-gradient">
                    <h1>The Refrigeration Parts Experts</h1>
                    <p>
                        Case Parts has been providing commercial refrigeration parts for over 50 years.
                        We have three locations nationwide to get you your parts faster and cheaper.
                        And Customer Service Reps have an average of over 12 years experience helping customers.
                        They know what questions to ask and where to go to solve your problems!
                    </p>
                </div>
                <div className="section white-on-dark-grey ">
                    <h1>Part Search</h1>
                    Enter Part Number: <input></input><button>Search</button>
                </div>
                <div className="section black-on-white">
                    <h1>Custom-Made Parts</h1>
                </div>
                <div className="section white-on-blue">
                    <h1>Parts Research</h1>
                </div>
                <div className="section white-on-dark-blue">
                    <footer>
                        <div>Contact</div>
                    </footer>
                </div>
            </>
        }
    ]

    return (
        <Task steps={steps} />
    )
}