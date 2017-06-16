const express = require('express');

const router = express.Router();
const AWS = require('aws-sdk');


  /* example file
  {
    file : {
      size : 35874,
      type : "image/png"
    }
  }
  */
router.post('/image', (req, res, next) => {
  if (!req.body.file) {
    throw new Error('File not found');
  }
  const file = req.body.file;

  if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
    if (file.size > 2200000) {
      throw new Error('File is too large');
    }
  } else {
    throw new Error('File is not picture');
  }

  const fileName = file.name;

  AWS.config.region = 'eu-west-1';
  AWS.config.accessKeyId = '<your-accessKeyId>';
  AWS.config.secretAccessKey = '<your-secretAccessKey>';
  AWS.config.signatureVersion = 'v4';

  const bucketName = '<your-bucketName>';
  const s3bucket = new AWS.S3();

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: stream,
    ContentType: file.type,
    ACL: 'public-read',
  };

  s3bucket.upload(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
