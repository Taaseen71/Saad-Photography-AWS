import AWS from 'aws-sdk';

const AWSConfig = {
    bucketName: 'saad-photography',
    dirName: 'images', /* optional */
    region: 'us-east-1',
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    // s3Url: '', /* optional */
  }

export default async function AWS_function() {
    AWS.config = AWSConfig
    const s3 = new AWS.S3({apiVersion: '2006-03-01'});
    let bucketParams = {
    Bucket: 'saad-photography'
    }

    const promise = new Promise((resolve, reject) => {
        s3.listObjects(bucketParams, function(err, data) {
            if (err) {
                reject(err)
            } 
            else {
                let imageArray = []
                data.Contents.map(image => imageArray.push(image.Key))
                imageArray.shift()
                resolve(imageArray)
            }
        });
    })

    return promise
}