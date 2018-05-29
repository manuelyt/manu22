//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const bucketlist = require('../models/List');


//GET HTTP method to /bucketlist
router.get('/',(req,res) => {
	bucketlist.getAllLists((err, lists)=> {
		if(err) {
			res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
		}
		else {
			res.write(JSON.stringify({success: true, lists:lists},null,2));
			res.end();	
			
	}	
	});
});


//POST HTTP method to /bucketlist

router.post('/', (req,res,next) => {
	console.log(req.body);
	let newList = new bucketlist({
		
		nombrec: req.body.nombrec,
		email: req.body.email,
		dni: req.body.dni,
		direcion: req.body.direcion,
		codigop: req.body.codigop,
		region: req.body.region,
		ciudad: req.body.ciudad,
		pais: req.body.pais,
		observaciones: req.body.observaciones,
		subscrito: req.body.subscrito,
		captacion: req.body.captacion,
		
	});
	bucketlist.addList(newList,(err, list) => {
		if(err) {
			res.json({success: false, message: `Failed to create a new list. Error: ${err}`});

		}
		else 
			res.json({success:true, message: "Added successfully."});
	
	});
});


//DELETE HTTP method to /bucketlist. Here, we pass in a params which is the object id.
router.delete('/:id', (req,res,next)=> {
	let id = req.params.id;
	console.log(id);
	bucketlist.deleteListById(id,(err,list) => {
		if(err) {
			res.json({success:false, message: `Failed to delete the list. Error: ${err}`});
		}
		else if(list) {
			res.json({success:true, message: "Deleted successfully"});
		}
		else
			res.json({success:false});
	})
});

module.exports = router;
