import React from 'react'
import GetImage from '../components/get-images/GetImage'; //! Carousel
import { useParams } from 'react-router-dom';

const ClientImages = () => {

    const {id} = useParams()
    console.log(id)
  return (
    <div>
        <header>
        <h2>UniqueID: {id}</h2>
        <p>Folder will be removed within 7 days. Please Download within the time frame.</p>
        </header>
        <div className="App-header">
          <GetImage bucketName={`${id}`}/>
        </div>
    </div>
  )
}

export default ClientImages