import React from "react"
import { Link } from "react-router-dom";
import PlayerPlus from "../components/PlayerPlus"

// This represents a single step of a task without making assumptions about the other steps
export default function TaskStep({ taskName, hideCancel, videoUrl, clickPrevious, clickNext, children }) {
    return (<>
        <div className="playerPlus">
            {(taskName && !hideCancel) &&
                <div className="subnav">
                    <Link to={-1}>
                        <button><i className="fa-solid fa-arrow-left-long" /></button>
                    </Link>
                    <h2>{taskName}</h2>
                </div>
            }
        </div>

        <PlayerPlus videoUrl={videoUrl} clickPrevious={clickPrevious} clickNext={clickNext} />

        <div className={!!taskName ? "pad" : ""}>
            {children}
        </div>
        {/* <div>
            <button disabled={!clickPrevious}  onClick={clickPrevious}>Previous</button>
            <Link to="-1"><button>Cancel</button></Link>
            <button disabled={!clickNext} onClick={clickNext}>Next</button>
        </div> */}
    </>
    )
}