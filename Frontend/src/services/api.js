import axios from "axios"  // axios is library which will allow us to do the things 

const API =axios.create({
    baseURL:"http://localhost:3000/api",

})

export const getAllStudent =async () =>{
    try{
        const response =await API.get("/students");
        console.log("response",response);
        console.log("response.data",response.data);
        console.log("response.data.students:",response.data.students);
const studentsArray =response.data.students
        for(let i=0 ; i<studentsArray.length;i++){
            const studentsObject=studentsArray[i];
            console.log("Student Name:",studentsObject.name);
            console.log("Student Age:",studentsObject.age);
            console.log ("-----------")
        }
     return studentsArray
    }
    catch(error){
        console.log("Error getting Student",error);
        
    }
}

export const addStudent =async({name,age}) =>{
    try{
        const response =await API.post("/student",{name,age});
        return response.data.message;

    }
    catch(error){
        console.log("Error creating Students",error)
    }
}
