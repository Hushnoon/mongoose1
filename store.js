
var mongoose=require('mongoose');

//creating connection
mongoose.connect('mongodb://localhost/sampletrial1');
var db = mongoose.connection;
console.log('Connected');

//creating schema
 var kittySchema = mongoose.Schema({
	    name: String
	});

//creating model---kitten1 is collection
var Kitten = mongoose.model('Kitten1', kittySchema);

//creating new document
var kitty1=new Kitten({name:'kitmity'});

//inserting data
kitty1.save();

//retreiving data and sending in response
exports.home = function(req,res){
		Kitten.find(function (err, kittens) {
			if (err) 
				return console.error(err);
			console.log(kittens);
			res.send(kittens);
});
}