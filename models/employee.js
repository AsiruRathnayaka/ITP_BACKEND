const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const employeeSchema = new Schema({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },

    dept : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    }
})

const Employee = mongoose.model("Employee",employeeSchema);

module.exports = Employee;