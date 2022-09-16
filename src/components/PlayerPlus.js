import React, { useState, useContext } from "react"
import { AppContext } from "../context/AppContext";
import Player from "./Player"

export default function PlayerPlus({ videoUrl, clickPrevious, clickNext, task, step }) {
    const { incrementPlayCount } = useContext(AppContext)
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

    const PlayerControls = () => <>
        <button disabled={!clickPrevious} onClick={clickPrevious}>
            <i className="fa-solid fa-backward-step"></i>
        </button>

        <button disabled={!videoUrl} onClick={clickReplay}>
            <i className="fa-solid fa-arrow-rotate-left" />
        </button>

        <button disabled={!videoUrl} onClick={clickPlayResume}>
            <i className={"fa-solid fa-play" + (play ? "-pause" : "")} />
        </button>

        <button disabled={!clickNext} onClick={clickNext}>
            <i className="fa-solid fa-forward-step" />
        </button>
    </>

    return (
        <Player
            myRef={myRef}
            src={videoUrl}
            play={play && ready}
            playHandler={() => setPlay(true)}
            pauseHandler={() => setPlay(false)}
            endHandler={() => {setPlay(false); incrementPlayCount(task, step)}}
            readyHandler={() => setReady(true)}
        >
            {(clickPrevious || clickNext) && <PlayerControls />}
        </Player>

    )
}