import React, {useEffect, useState} from 'react'
import AWS_function from '../../functions/aws-functions/AWS_function'
import { Container,} from 'react-bootstrap';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
// import "./Image.css"

function GetImage({bucketName}) {
    const [imageArray, setImageArray] = useState([])
    // const [index, setIndex] = useState(Math.floor(Math.random() * imageArray.length));
    // const dataFetchedRef = useRef(false);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };

    const [sliderRef, instanceRef] = useKeenSlider(
            {
                slideChanged() {
                console.log('slide changed')
                },
                // vertical: true
            },
            [
                // add plugins here
                
            ]
        )
    
    useEffect(() => {
        AWS_function(bucketName).then(value => { 
            setImageArray(value);
        })

    }, [bucketName])

    const ImageSize = {
        maxWidth: "100%",
        maxHeight: '90vh',
        // objectFit: 'contain', 
        // pointerEvent: 'none',
        // padding: '50px'
    }

    const container = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center"
    }
    


  return (
       <Container fluid>
            <div  
                ref={sliderRef} className="keen-slider"
                
            > 
                {imageArray.map(image => {
                    return (
                        <div key={image} 
                            className="keen-slider__slide"
                            style={{...container}}
                        >
                            <img 
                                style={{...ImageSize}} 
                                onContextMenu={(e) => {e.preventDefault(); return false}} 
                                src={`https://${bucketName}.s3.amazonaws.com/${image}`} 
                                alt={image}
                                />
                        </div>
                    )
                })}
            </div>

        </Container>
  )
}

export default GetImage