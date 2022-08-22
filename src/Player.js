import React from "react";
import ReactPlayer from "react-player";

function Player({ src, play, myRef, startHandler, endHandler, readyHandler, children }) {
    console.log("Player", src, play)

    function handleOnStart() {
        if (startHandler) {
            startHandler(src, true)
        }
    }
    function handleOnPause() {
        if (startHandler) {
            startHandler(src, false)
        }
    }

    function handleOnEnded() {
        if (endHandler) {
            endHandler(src)
        }
    }

    function handleOnReady() {
        if (readyHandler) {
            readyHandler(src)
        }
    }

    return (
        <div className="player">
            <div className={"player-fluid"}>
                <ReactPlayer
                    ref={myRef}
                    url={src}
                    className="react-player"
                    playing={play}
                    muted={false}
                    width="100%"
                    height="100%"
                    controls={true}
                    autoPlay={true}
                    config={{ vimeo: { playerOptions: { playsinline: 1 } } }}
                    onPlay={handleOnStart}
                    onPause={handleOnPause}
                    onEnded={handleOnEnded}
                    onReady={handleOnReady}
                />
            </div>
            <div className="player-controls">
                {children}
            </div>
        </div>
    )
}

export default Player;
