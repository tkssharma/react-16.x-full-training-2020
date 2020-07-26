var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	userName: { type: String, required: true },
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	status: {
		type: String
	},
	posts: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Post' } ]
});

module.exports = mongoose.model('User', UserSchema);
