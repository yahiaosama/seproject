var mongoose = require('mongoose');
var bproviderSchema = mongoose.Schema({
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

var bprovider = mongoose.model('bprovider',bproviderSchema);
module.exports = bprovider;
