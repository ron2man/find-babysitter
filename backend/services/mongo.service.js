
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://ron2man:ron123@ds119374.mlab.com:19374/babysitter_db';
// const url = 'mongodb://localhost:27017';

const dbName = 'babysitter_db';

var dbConnection = null;

function connectToDb() {
    if (dbConnection) return Promise.resolve(dbConnection);

    return new Promise((resolve, reject)=>{
        MongoClient.connect(url, (err, client) => {
            if (err) return reject('Cannot connect to Mongo');
            console.log("Connected successfully to server");
            dbConnection = client.db(dbName);
            resolve(dbConnection)
        });

    });
}


module.exports = {
    connectToDb
}