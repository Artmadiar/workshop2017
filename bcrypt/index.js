const bcrypt = require('bcrypt');

const saltRounds = 12;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const myPromise = new Promise((resolve, reject) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {

    bcrypt.hash(someOtherPlaintextPassword, salt, (err, hash) => {
      // Store hash in your password DB.
      console.log('\nsaltRounds: ', saltRounds);
      console.log('pass: ', someOtherPlaintextPassword);
      console.log('salt: ', salt);
      console.log('hash: ', hash);
      // resolve(hash);
    });

    bcrypt.hash(someOtherPlaintextPassword, salt, (err, hash) => {
      // Store hash in your password DB.
      console.log('\nsaltRounds: ', saltRounds);
      console.log('pass: ', someOtherPlaintextPassword);
      console.log('salt: ', salt);
      console.log('hash: ', hash);
      resolve(hash);
    });
  });
}).then((success) => {
  // Load hash from your password DB
  bcrypt.compare(myPlaintextPassword, success, (err, res) => {
    console.log('\npass to compare: ', myPlaintextPassword);
    console.log('compare result: ', res);
  });

  bcrypt.compare(someOtherPlaintextPassword, success, (err, res) => {
    console.log('\npass to compare: ', someOtherPlaintextPassword);
    console.log('compare result: ', res);
  });
});

const myPromise2 = new Promise((resolve, reject) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(someOtherPlaintextPassword, salt, (err, hash) => {
      // Store hash in your password DB.
      console.log('\nsaltRounds: ', saltRounds);
      console.log('pass: ', someOtherPlaintextPassword);
      console.log('salt: ', salt);
      console.log('hash: ', hash);
      // resolve(hash);
    });
  });
});
