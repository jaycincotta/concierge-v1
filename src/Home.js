import React, { useState } from "react"
import Player from "./Player"
import ContactInfo from "./components/ContactInfo";

export default function Home() {
  const [video, setVideo] = useState(0)
  const [play, setPlay] = useState(false);
  const [ready, setReady] = useState(false)
  const myRef = React.createRef()
  const videos = [
    "https://vimeo.com/741705223/5ca0983480", // 0: Jay Tutorial 1
    "https://vimeo.com/741706003/e3d8e3e09e", // 1: Jay Tutorial 2
    "https://vimeo.com/741707007/4f8ad9f04e", // 2: Jay Tutorial 3 Authenticated
    "https://vimeo.com/741707199/4a0bc9ed43", // 3: Jay Tutorial 3 Anonymous
    "https://vimeo.com/741709927/50f90a416e", // 4: Jay Tutorial 4
    "https://vimeo.com/741710210/c85fceae30"  // 5: Jay Home 1
  ]
  const params = new URLSearchParams(window.location.search)
  const custId = params.get("custId")
  const firstName = params.get("name")
  
  function findVideo(src, verb) {
    const index = videos.indexOf(src);
    if (index < 0) {
      console.log(verb + ": " + src + " not found")
    } else {
      console.log(verb + " video " + (index + 1))
    }
  }

  // function selectVideo(index) {
  //   setVideo(index)
  //   setPlay(true)
  //   setReady(false)
  // }

  function handleOnStart(src, isPlaying) {
    findVideo(src, isPlaying ? "Started" : "Paused")
    setPlay(isPlaying)
  }

  function handleOnEnded(src) {
    findVideo(src, "Ended")
    setPlay(false);
    //setVideo((video + 1) % 5)
  }

  function handleOnReady(src) {
    findVideo(src, "Ready")
    setReady(true);
  }

  function clickCancel() {
    setVideo(5)
  }

  function clickPrevious() {
    if (video > 0) {
      setVideo(video - 1)
    }
  }

  function clickNext() {
    if (video < videos.length - 1) {
      setVideo(video + 1)
    }
  }

  function clickReplay() {
    myRef.current.seekTo(0)
    setPlay(true)
  }

  function clickPlayResume() {
    setPlay(!play)
  }

  if (video === 2 && !custId) {
    setVideo(3)
  }
  if (video === 3 && custId) {
    setVideo(4)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CaseParts<span className="thin">Concierge</span></h1>
        {video < 5 && <div className="task">
          <button onClick={clickCancel}><i className="fa-solid fa-arrow-left-long" /></button><h2>Getting Started</h2>
        </div>}
        {video === 5 && <div className="task">
          <h2>How can we help you today?</h2>
        </div>}
      </header>
      <Player src={videos[video]} play={play && ready} myRef={myRef}
        startHandler={handleOnStart} endHandler={handleOnEnded} readyHandler={handleOnReady}>
        <button disabled={video === 0 || video === 5} onClick={clickPrevious}><i className="fa-solid fa-backward-step"></i></button>
        <button onClick={clickReplay}><i className="fa-solid fa-arrow-rotate-left" /></button>
        {!play && <button onClick={clickPlayResume}><i className="fa-solid fa-play" /></button>}
        {play && <button onClick={clickPlayResume}><i className="fa-solid fa-play-pause" /></button>}
        <button disabled={video === 5} onClick={clickNext}><i className="fa-solid fa-forward-step" /></button>
      </Player>
      <div className="content">
        {video === 0 && <div>
          <h1>Welcome!</h1>
          <p>
            This app is optimized for your phone to make it fast and easy to request quotes from Case Parts for commercial refrigeration parts.
          </p><p>
            Click Play for step-by-step instructions on using this app.
          </p>
        </div>}
        {video === 1 && <div>
          <h1>Good Job!</h1>
          <p>You're getting the hang of using the player control buttons. This is important because
            context-sensitive video help is always available in Case Parts Concierge</p>
        </div>}
        {video === 2 && <div>
          { firstName && <h1>Good to see you, {firstName}!</h1> }
          { !firstName && <h1>Good to see you!</h1> }
          <p>You're logged into your Case Parts account: {custId}</p>
        </div>}
        {video === 3 && <div>
          <h1>Which best describes you?</h1>
          <ul>
            <li>I'm new to Case Parts</li>
            <li>I'm familiar with Case Parts but have never placed an order</li>
            <li>I've bought from Case Parts before, but I'm not registered on the website</li>
            <li>I have a CustomerID, but I'm not registered on the website</li>
            <li>I'm registered with caseparts.com, but don't have a CustomerID</li>
            <li>I have a CustomerID and am registered on caseparts.com</li>
            <li>I'd rather not answer this question</li>
          </ul>
        </div>}
        {video === 4 && <ContactInfo />}

        {video === 5 && <div>
          <h1>Main Menu</h1>
          <div className="menu">
            <button>I need parts</button>
            <button>I need help from a human being</button>
            <button onClick={() => setVideo(0)}>Getting Started Tutorial</button>
          </div>

        </div>}
      </div>
    </div>
  );
}

