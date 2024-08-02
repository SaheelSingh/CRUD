const mongoose = require('mongoose');

const connectDb = () => {
    try {
        mongoose.connect('mongodb://root:secret@mongo:27017/', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Database connected successfully");
    }
    catch {
        console.log("Failed to connect to Database");
        process.exit(1);
    }
}

module.exports = connectDb;