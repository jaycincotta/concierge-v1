import React from "react";
import ReactPlayer from "react-player";

function Player({ src, play, myRef, playHandler, pauseHandler, endHandler, readyHandler, children }) {
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
                    onPlay={playHandler}
                    onPause={pauseHandler}
                    onEnded={endHandler}
                    onReady={readyHandler}
                />
            </div>
            <div className="player-controls">
                {children}
            </div>
        </div>
    )
}

export default Player;
