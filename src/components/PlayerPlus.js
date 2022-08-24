import React, { useState } from "react"
import Player from "./Player"

export default function PlayerPlus({ videoUrl, clickPrevious, clickNext }) {
    const [play, setPlay] = useState(false);
    const [ready, setReady] = useState(false)
    const myRef = React.createRef()

    function clickReplay() {
        myRef.current.seekTo(0)
        setPlay(true)
    }

    function clickPlayResume() {
        setPlay(!play)
    }

    return (
        <Player
            myRef={myRef}
            src={videoUrl}
            play={play && ready}
            playHandler={() => setPlay(true)}
            pauseHandler={() => setPlay(false)}
            endHandler={() => setPlay(false)}
            readyHandler={() => setReady(true)}
        >
            <button disabled={!clickPrevious} onClick={clickPrevious}>
                <i className="fa-solid fa-backward-step"></i>
            </button>

            <button onClick={clickReplay}>
                <i className="fa-solid fa-arrow-rotate-left" />
            </button>

            <button onClick={clickPlayResume}>
                <i className={"fa-solid fa-play" + (play ? "-pause" : "")} />
            </button>
            
            <button disabled={!clickNext} onClick={clickNext}>
                <i className="fa-solid fa-forward-step" />
            </button>
        </Player>

    )
}