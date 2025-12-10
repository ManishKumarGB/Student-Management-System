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
// PUT route to update a student by ID
app.put('/api/student/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        const updates = req.body;
        
        // Mongoose method to find and update the document
        const updatedStudent = await Student.findByIdAndUpdate(
            studentId, 
            updates, 
            { new: true, runValidators: true } // 'new: true' returns the updated document
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE route to delete a student by ID
app.delete('/api/student/:id', async (req, res) => {
    try {
        const studentId = req.params.id;

        // Mongoose method to find and delete the document
        const deletedStudent = await Student.findByIdAndDelete(studentId);

        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        
        // 204 No Content is a standard success status for DELETE
        res.status(204).json({
             success: true,
            message: "successfully created student",
            
        }); 
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(PORT, () => {
  console.log("Application is running in PORT", PORT);
});