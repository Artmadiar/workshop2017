bcrypt
---
 
Work with hashing strings and compare. 

genSalt(saltRounds, callback(error, salt)) - generate salt with some rounds (2^saltRounds)
Usually use 12 rounds.
`bcrypt.genSalt(saltRounds, (err, salt) => {`

hash(textPass, salt, callback(err, hash)) - create hash of password
`bcrypt.hash(someOtherPlaintextPassword, salt, (err, hash) => {`

compare(pass, hash, callback(error, result)) - compare pass with hash. result = true/false
`bcrypt.compare(myPlaintextPassword, success, (err, res) => {`
