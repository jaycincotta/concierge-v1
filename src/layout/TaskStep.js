import React from "react"
import { Link } from "react-router-dom";
import PlayerPlus from "../components/PlayerPlus"

// This represents a single step of a task without making assumptions about the other steps
export default function TaskStep({ title, videoUrl, clickPrevious, clickNext, children }) {
    return (<>
        <div className="playerPlus">
            {title &&
                <div className="subnav">
                    <Link to={-1}>
                        <button><i className="fa-solid fa-arrow-left-long" /></button>
                    </Link>
                    <h2>{title}</h2>
                </div>
            }
        </div>

        <PlayerPlus videoUrl={videoUrl} clickPrevious={clickPrevious} clickNext={clickNext} />

        <div className={!!title ? "pad" : ""}>
            {children}
        </div>
    </>
    )
}