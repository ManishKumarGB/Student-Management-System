const mongoose = require('mongoose');

// Define the schema for the student data
const studentSchema = new mongoose.Schema({
    // Name field: must be a string and is required
    name: {
        type: String,
        required: true,
        trim: true // Removes whitespace from both ends of a string
    },
    // Age field: must be a number and is required
    age: {
        type: Number,
        required: true,
        min: 0 // Ensures the age is a non-negative number
    },
    // Optional field: Mongoose automatically adds timestamps
    // to record creation and update times
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    // Schema options: enables automatic 'createdAt' and 'updatedAt' fields
    // You can remove this if you only rely on the manual 'createdAt' field above
    timestamps: true 
});

// Create and export the model based on the schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;