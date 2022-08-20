import React from "react";
import ReactPlayer from "react-player";

function Player({src, play, myRef, endHandler}) {
    return <div className="player-wrapper">
    <ReactPlayer
      ref={myRef}
      url={src}
      className="react-player"
      playing={play}
      muted={false}
      width="100%"
      height="100%"
      controls={true}
      autoPlay={play}
      config={{ vimeo: { playerOptions: { playsinline: 1 } } }}
      onStart={()=> console.log("Start")}
      onEnded={endHandler ? endHandler : ()=> console.log("End")}
    />
  </div>
}

export default Player;
