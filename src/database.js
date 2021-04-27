const mongoose =require('mongoose');
const app = require('./index');

const URI = 'mongodb://localhost/vocational-test';

mongoose.connect(URI,
    { 
        //useNewUrlParser: true, 
        //useUnifiedTopology: true 
    }
    )
    .then(db => console.log("DB is connected"))
    .catch(err => console.error(err));

module.exports = mongoose; 