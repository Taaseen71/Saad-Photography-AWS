import React from 'react'
import GetImage from '../components/get-images/GetImage'; //! Carousel

function Home() {
  return (
    <div>
        <header>Saad's Photography</header>
        <div className="App-header">
          <GetImage bucketName={"saad-photography"}/>
        </div>
    </div>
  )
}

export default Home