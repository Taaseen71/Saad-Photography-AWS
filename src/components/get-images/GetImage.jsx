import React, {useEffect, useState} from 'react'
import AWS_function from '../aws-functions/AWS_function'
import {Carousel} from 'react-bootstrap';

function GetImage() {
    const [imageArray, setImageArray] = useState([])
    // const dataFetchedRef = useRef(false);
    
    useEffect(() => {
        //! to render DOM once use following or disable react-strictmode in index.js
        // if (dataFetchedRef.current) return;
        // dataFetchedRef.current = true;

        AWS_function().then(value => { 
            // setImageArray(value.splice(0,5));
            setImageArray(value);
        })

    }, [])
    


  return (
    <div className="App-header">
        <Carousel 
            indicators={true} 
            // interval={3000}
            activeIndex={Math.floor(Math.random() * imageArray.length)} 
            // variant="dark" 
            touch={true}
        >
            {imageArray.map(image => {
                return (
                    <Carousel.Item key={image}>
                        <img src={`https://saad-photography.s3.amazonaws.com/${image}`} width="80%" alt={image}/>
                        <Carousel.Caption>
                        <h3>Image: {image.split("/")[1]}</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    </div>
  )
}

export default GetImage