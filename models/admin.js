var mongoose = require('mongoose');
var adminSchema = mongoose.Schema({
username:{
  type:String,
  required:true,
  unique:true
},
password:{
  type:String,
  required:true
},
email:{
  type:String,

}


})

var admins = mongoose.model('admins',adminSchema);
module.exports = admins;
