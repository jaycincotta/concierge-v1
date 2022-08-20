import React, {useState} from "react"
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
  return (

    <div className="App">
      <header className="App-header">
        <h1>Case Parts Concierge</h1>
      </header>
      <p>This will be super cool, once we add some video!</p>
      <Player src={videos[video]} play={play} myRef={myRef} endHandler={()=>setVideo((video + 1)%5)}/>
      <p onClick={()=> setVideo(0)}>Test1</p>
      <p onClick={()=> setVideo(1)}>Test2</p>
      <p onClick={()=> setVideo(2)}>Test3</p>
      <p onClick={()=> setVideo(3)}>Test4</p>
      <p onClick={()=> setVideo(4)}>Test5</p>
      <p onClick={()=> setPlay(!play)}>START</p>
    </div>
  );
}

export default App;
