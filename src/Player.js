import React from "react";
import ReactPlayer from "react-player";

const Player = ({src}) => (
  <div className="player-wrapper">
    <ReactPlayer
      url={src}
      className="react-player"
      playing={true}
      width="100%"
      height="100%"
      controls={true}
      autoplay={true}
    />
  </div>
);

export default Player;
