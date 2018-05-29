
//Require mongoose package
const mongoose = require('mongoose');

//Define BucketlistSchema with title, description and category
const BucketlistSchema = mongoose.Schema({
    
    
    nombrec: String,
    email: String,
    dni: String,
    subscrito: {
        type: String,
        enum: ['si', 'no']
    },
    captacion: {
        type: String,
        enum: ['telefonica', 'web', 'presencial']
    },
    direccion: String,
    codigop: String,
    region: String,
    ciudad: String,
    pais: String,
    observaciones: String
    

});

//Create a model using mongoose.model and export it
const BucketList = module.exports = mongoose.model('BucketList', BucketlistSchema );


//BucketList.find() returns all the lists
module.exports.getAllLists = (callback) => {
	BucketList.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
	newList.save(callback);
}


//We pass on an id and remove it from DB using Bucketlist.remove()
module.exports.deleteListById = (id, callback) => {
	let query = {_id: id};
	BucketList.remove(query, callback);
}

