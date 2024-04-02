const mongoose = require('mongoose');

const local = "mongodb+srv://trinhpkph31536:nhokgl9x@cluster0.gwfgczu.mongodb.net/AND103";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
