const mongoose = require("mongoose");
const dbURI = 'mongodb+srv://harsha:harsha@cluster0-fanfm.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbURI,{dbName:'mean-app'});
mongoose.connection.on('connected',() => {
    console.log('connected');
});
mongoose.connection.on("error", err => {
    console.log('disconnected');
});

require('./user');
require('./message');
