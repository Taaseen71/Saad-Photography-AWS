import React, {useEffect, useState} from 'react'
import AWS_function from '../../functions/aws-functions/AWS_function'
import {Carousel, Button} from 'react-bootstrap';
// import "./Image.css"

function GetImage({bucketName}) {
    const [imageArray, setImageArray] = useState([])
    const [index, setIndex] = useState(Math.floor(Math.random() * imageArray.length));
    // const dataFetchedRef = useRef(false);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    useEffect(() => {
        //! to render DOM once use following or disable react-strictmode in index.js
        // if (dataFetchedRef.current) return;
        // dataFetchedRef.current = true;
        // console.log(bucketName)
        AWS_function(bucketName).then(value => { 
            // console.log(value)
            setImageArray(value);
        })

    }, [bucketName])

    const ImageSize = {
        // minWidth:'80%',
        // maxWidth: '90%',
        maxWidth: "90%",
        maxHeight: '90vh',
        objectFit: 'contain',
        borderRadius: '15px'
    }
    


  return (
    <div>
        <Carousel bsPrefix="carousel" wrap={true} activeIndex={index} onSelect={handleSelect} slide={true} touch={true} controls={false} keyboard={false} indicators={false}>
            {imageArray.map(image => {
                return (
                    <Carousel.Item key={image}>
                        <img style={{...ImageSize}} src={`https://${bucketName}.s3.amazonaws.com/${image}`} alt={image}/>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
            <Button 
                className="carousel-control-prev" 
                data-slide="prev"  
                variant='dark' 
                onClick={() => {index===0 ? setIndex(imageArray.length-1) : setIndex(index-1)}}
            >
                <span aria-hidden="true" className="carousel-control-prev-icon" />
            </Button>
            <Button 
                className="carousel-control-next" 
                data-slide="prev" 
                variant='dark' 
                onClick={() => {index===imageArray.length-1 ? setIndex(0) : setIndex(index+1)}} 
            >
                <span aria-hidden="true" className="carousel-control-next-icon" />
            </Button>
    </div>
  )
}

export default GetImage