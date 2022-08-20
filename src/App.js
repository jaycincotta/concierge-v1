import React, { useState } from "react"
import Player from "./Player"

function App() {
  const [video, setVideo] = useState(0)
  const [play, setPlay] = useState(false);
  const myRef = React.createRef()
  const videos = [
    "https://vimeo.com/741315350",
    "https://vimeo.com/741315359",
    "https://vimeo.com/741315366",
    "https://vimeo.com/741315375",
    "https://vimeo.com/741315387"
  ]

  function selectVideo(index) {
    setVideo(index)
    setPlay(true)
  }
  return (

    <div className="App">
      <header className="App-header">
        <h1>CaseParts <span className="thin">Concierge</span></h1>
      </header>
      <Player src={videos[video]} play={play} myRef={myRef}
        endHandler={() => { setPlay(false); setVideo((video + 1) % 5) }} />
      <div className="content">
        <p onClick={() => selectVideo(0)}>Test1</p>
        <p onClick={() => selectVideo(1)}>Test2</p>
        <p onClick={() => selectVideo(2)}>Test3</p>
        <p onClick={() => selectVideo(3)}>Test4</p>
        <p onClick={() => selectVideo(4)}>Test5</p>
        <p onClick={() => setPlay(!play)}>START</p>
      </div>
    </div>
  );
}

export default App;
