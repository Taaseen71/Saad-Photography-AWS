import logo from './logo.svg';
import { useEffect, useState } from 'react';
import AWS from 'aws-sdk';
import './App.css';


const config = {
  bucketName: 'saad-photography',
  dirName: 'images', /* optional */
  region: 'us-east-1',
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  // s3Url: '', /* optional */
}


function App() {

  const [imagesState, setImagesState] = useState([])
  

  useEffect(() => {
    GetAWSImageNames(config).then(value => {
      setImagesState(value);
    });
  }, [])
  

  function GetRandomImage(array){
    return array[Math.floor(Math.random()*array.length)]
  }
  
  function GetAWSImageNames(AWSConfig){
    AWS.config = AWSConfig
    const s3 = new AWS.S3({apiVersion: '2006-03-01'});
    let bucketParams = {
      Bucket: 'saad-photography'
    }

    return new Promise((resolve, reject) => {
      s3.listObjects(bucketParams, function(err, data) {
        if (err) {
          reject(err)
        } else {
          let imageArray = []
          data.Contents.map(image => imageArray.push(image.Key))
          imageArray.shift()
          resolve(imageArray)
        }
      });
    })
  }
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={`https://saad-photography.s3.amazonaws.com/${GetRandomImage(imagesState)}`} width="400px" />
      </header>
    </div>
  );
}



export default App;
