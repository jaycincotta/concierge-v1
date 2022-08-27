import React from "react"
import { Link } from "react-router-dom"
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
                <h1>Main Menu</h1>
                <div className="menu">
                    <Link to="/quote"><button>Get a Parts Quote</button></Link>
                    <Link to="/contact"><button>Contact Us</button></Link>
                    <Link to="/getting-started"><button>Getting Started Tutorial</button></Link>
                </div>
            </>
        }
    ]

    return (
        <Task steps={steps} />
    )
}