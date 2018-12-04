const mongoService = require('./mongo.service')

const ObjectId = require('mongodb').ObjectId;


function query({
     minAge = 0, 
     maxAge = 200, 
     sTime = 1512311933000, 
     eTime = 1512311933000, 
     name = '', 
     radius = Infinity, 
     lat = null, 
     lng = null, 
     sortBy = 'aveRate',
     minWage = 0,
     maxWage = Infinity,
     limit = 100000,

}) {



    // START QUERY BY WAGE
    var wageFilter = {
        hWage: { $gte: +minWage, $lte: +maxWage }
    }
    // END QUERY BY WAGE


    // START QUERY BY LOCATION
    var locationFilter = {
        location:
        {
            $near:
            {
                // FIRST LNG - SECOND LAT
                $geometry: { type: "Point", coordinates: [+lng, +lat] },
                $minDistance: 0,
                $maxDistance: +radius
            }
        }
    }
    // END QUERY BY LOCATION

    // START QUERY BY NAME SEARCH
    // const regEx = new RegExp( '.*' + name + '.*', 'i') 
    var nameFilter = {
        'name.fullName': { $regex: '.*' + name + '.*', $options: 'i' }
    }

    // END QUERY BY NAME SEARCH

    // START QUERY BY AGE
    var ageFilter = {
        age: { $gte: +minAge, $lte: +maxAge }
    }
    // END QUERY BY AGE

    // START QUERY BY TIME GAP
    // if (filter.sTime) var startTime = +sTime;
    // if (filter.eTime) var endTime = +eTime;

    // RETURN DATA WITH AVAILABLE REQUESTED TIME SLOT
    var timeGapFilter = {
        $nor:
            [{ schedule: { $elemMatch: { sTime: { $gte: +sTime, $lte: +eTime } } } },
            { schedule: { $elemMatch: { eTime: { $gte: +sTime, $lte: +eTime } } } }]
    }
    // END QUERY BY TIME GAP




    console.log('filter at service back',sortBy);


    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            collection.createIndex({ "location": "2dsphere" });
            // return collection.find({}).toArray()
            return collection.find({ $and: [timeGapFilter, ageFilter, nameFilter, locationFilter, wageFilter, {}] }).sort( { [sortBy]: -1 } ).sort( { [sortBy]: -1 } ).limit(+limit).toArray()

        })
}

function checkAvalability(reservation) {
    console.log(1546329600000,'needeed')
    console.log(reservation.start,'got')
    console.log(1546336800000,'needeed')
    console.log(reservation.end,'got')
    var reservationFilter = {$and:[
            { schedule: { $elemMatch: { sTime: { $gte: +reservation.start, $lte: +reservation.end } } } },
            { schedule: { $elemMatch: { eTime: { $gte: +reservation.start, $lte: +reservation.end } } } },
            {username:reservation.to}
        ]
    }
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.find(reservationFilter).toArray()
        })
}


function checkParentLogin(typedDetails) {
    return parent = mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('parents');
            return collection.find({ $and: [{ username: typedDetails.nickName }, { pwd: typedDetails.pwd }] }).toArray()
        })
}

function checkSitterLogin(typedDetails) {
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.find({ $and: [{ username: typedDetails.nickName }, { pwd: typedDetails.pwd }] }).toArray()
        })
}


function getById(sitterId) {
    sitterId = new ObjectId(sitterId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.findOne({ _id: sitterId })
        })
}

function getByUsernameSitter(username) {
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.findOne({ username: username })
        })
}

function getByUsernameParent(username) {
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('parents');
            return collection.findOne({ username: username })
        })
}



function remove() {
    sitterId = new ObjectId(sitterId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.remove({ _id: sitterId })
        })
}

function updateSitter(user) {
    user._id = new ObjectId(user._id)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters');
            return collection.updateOne({ _id: user._id }, { $set: user })
                .then(result => {
                    // return result;
                    // })
                    // console.log(result)
                })
        })
}

function updateParent(user) {
    user._id = new ObjectId(user._id)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('parents');
            return collection.updateOne({ _id: user._id }, { $set: user })
                .then(result => {
                    // console.log(result)
                    return result;
                })
        })
}


function addSitter(userdetails) {
    var newUser = userdetails
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('sitters')
            return collection.insert(userdetails)
                .then(user => {
                    newUser._id = user.insertedIds
                    return newUser
                })
        })


}



module.exports = {
    query,
    getById,
    remove,
    updateSitter,
    updateParent,
    getByUsernameSitter,
    getByUsernameParent,
    checkSitterLogin,
    checkParentLogin,
    addSitter,
    checkAvalability
}

// historymsgs = {['etishimrit']:[]}