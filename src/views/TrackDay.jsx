import React from 'react'
import GetImage from '../components/get-images/GetImage'; //! Carousel

function TrackDay() {
  return (
    <div>
        <header>Track Day</header>
        <div className="App-header">
          <GetImage bucketName={"saad-trackday"}/>
        </div>
    </div>
  )
}

export default TrackDay