import React from "react";
import ReactPlayer from "react-player";

const Player = ({src}) => (
  <div className="player-wrapper">
    <ReactPlayer
      url={src}
      className="react-player"
      playing={true}
      muted={false}
      config={{
        vimeo: {
          iframeParams: { fullscreen: 0 },
          autoplay: true,
          playsinline: true,
        },
      }}
      width="98%"
      height="98%"
      controls={true}
      autoplay={true}
    />
  </div>
);

export default Player;
