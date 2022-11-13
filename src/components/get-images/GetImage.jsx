import React, {useEffect, useState} from 'react'
import AWS_function from '../../functions/aws-functions/AWS_function'
import {Carousel} from 'react-bootstrap';
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
        maxHeight: '90vh',
        objectFit: 'contain',
        borderRadius: '15px'
    }
    


  return (
    <div>
        <Carousel activeIndex={index} onSelect={handleSelect} slide={true} touch={true} controls={true} indicators={false}>
            {imageArray.map(image => {
                return (
                    <Carousel.Item key={image}>
                        <img style={{...ImageSize}} src={`https://${bucketName}.s3.amazonaws.com/${image}`} alt={image}/>
                        <Carousel.Caption>
                        {/* <p>Image: {image.split("/")[1]}</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    </div>
  )
}

export default GetImage