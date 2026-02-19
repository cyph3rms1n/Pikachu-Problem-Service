const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');


async function connectToDB(){

    try {
        if(NODE_ENV == "development"){
            await mongoose.connect(ATLAS_DB_URL);
        }else if(NODE_ENV == "production"){
            await mongoose.connect("Some other database");
        }
    } catch (error) {
        console.log("Unable to connect to database");
        console.log(error);
    }
}

module.exports = connectToDB;