const router = require("express").Router();
let employee = require("../models/employee");



http://Localhost:8070/employee/add

router.route("/add").post((req,res)=>{

    const fname = req.body.fname;
    const lname =  req.body.lname;
    const dept = req.body.dept;
    const age = Number (req.body.age);
    

    const newemployee = new employee({

        fname,
        lname,
        dept,
        age

        

    })

    newemployee.save().then(()=>{
        res.json("Employee Added")
    }).catch((err)=>{
        console.log(err);
    })

})

http://Localhost:8070/employee/

router.route("/").get((req,res)=>{

    employee.find().then((employee)=>{
        res.json(employee)
    }).catch((err)=>{
        console.log(err)
    })

})

http://Localhost:8070/employee/update/:id

router.route("/update/:id").put(async (req,res)=>{
   
    let userId = req.params.id;
    const {fname,lname,dept,age} = req.body;

    const updateEmployee = {
        fname,
        lname,
        dept,
        age
    }

    const update = await employee.findByIdAndUpdate(userId,updateEmployee)
    .then(() => {
        res.status(200).send({status: "User Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })
})   

http://Localhost:8070/employee/delete/:id    

router.route("/delete/:id").delete(async (req,res) => {

    let userId = req.params.id;
    
    await employee.findByIdAndDelete(userId)
    .then (() => {
        res.status(200).send({status: "User Deleted"})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error Deleting User",error:err.message});
    })

})

router.route("/get/:id").get(async(req,res) => {
    let userId = req.params.id;
    await employee.findById(userId)
    .then((employee) => {
        res.status(200).send({status:"User Fetched", employee})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error Fetching User",error: err.message});
    })
})



module.exports = router;