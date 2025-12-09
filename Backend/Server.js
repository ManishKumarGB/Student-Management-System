const express = require("express");
const app = express();
const cors = require("cors");
const ConnectDB = require("./connection/db");
const mongoose =require("mongoose");
const Student=require("./Model/Student");
app.use(express.json());
app.use(cors());

const PORT = 3000;

ConnectDB();

app.post("/api/student",async(req,res) =>{
    try{
        const newStudent=req.body;
        const student=new Student(newStudent);
        await student.save();

        res.status(200).json({
            success: true,
            message: "successfully created student",
            student:student,
        })
                
    }
    catch(error){
        console.log("error creating students",error);
    }
})
app.get('/api/students', async (req, res) => {
    try {
        // Use the find() method without any arguments to get all documents
        const students = await Student.find();
        res.status(200).json(students); // Send the list of students as JSON
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(PORT, () => {
  console.log("Application is running in PORT", PORT);
});