const express = require("express") // express libaries are in the node modules if we need it we shld write this line
const app=express();// we are calling the expresss function into the app so tht all the nodule modules will come to the app so the we can use it 

const PORT =3000;  // we need to port to run on tht port

app.listen(PORT,()=>{  // we use thjs app.listen to run the application in particular port it has two parameter frist is port and call parameter
    

    console.log("Application i9s running in POrt",PORT);
})