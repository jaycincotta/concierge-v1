import React from "react";
import ReactPlayer from "react-player";

function Player({ src, play, myRef, startHandler, endHandler, readyHandler }) {
    console.log("Player", src, play)

    function handleOnStart() {
        if (startHandler) {
            startHandler(src)
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

    return <div className={"player-wrapper"}>
        <ReactPlayer
            ref={myRef}
            url={src}
            className="react-player"
            playing={play}
            muted={false}
            width="100%"
            height="100%"
            controls={true}
            autoPlay={false}
            config={{ vimeo: { playerOptions: { playsinline: 1 } } }}
            onStart={handleOnStart}
            onEnded={handleOnEnded}
            onReady={handleOnReady}
        />
    </div>
}

export default Player;
