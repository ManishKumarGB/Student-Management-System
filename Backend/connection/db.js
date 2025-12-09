const mongoose = require("mongoose");

async function ConnectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://manishgb2001_db_user:<db_password>@studentmanagement.85fjytj.mongodb.net/?appName=StudentManagement"
    );
    console.log("Connected Mongodb");
  } catch (error) {
    console.log("Error Connecting to Mongodb", error);
  }
}



module.exports = ConnectDB;