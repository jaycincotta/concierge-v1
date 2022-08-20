import React, {useState} from "react"
import Player from "./Player"

function App() {
  const [video, setVideo] = useState(0)
  const videos = [
    "",
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
      {video &&  <Player src={videos[video]} />}
      <p onClick={()=> setVideo(1)}>Test1</p>
      <p onClick={()=> setVideo(2)}>Test2</p>
      <p onClick={()=> setVideo(3)}>Test3</p>
      <p onClick={()=> setVideo(4)}>Test4</p>
      <p onClick={()=> setVideo(5)}>Test5</p>
    </div>
  );
}

export default App;
