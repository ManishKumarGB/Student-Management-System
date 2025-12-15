import React, { useState } from 'react'
import {getAllStudent} from "../services/api";
import { useEffect} from 'react';

const Table = () => {
    const[Students,setStudents] =useState([]);

    async function usefetchstudents() {
        try{
            const Students =await getAllStudent();
            setStudents(Students);

            console.log("Students:",Student)
        }
        catch(error){

        }
        
    }

    useEffect(() =>{
       usefetchstudents();
    },[]);

  return (
   <>
        
    <div className='Table'>
        <h1>Students Table</h1>
        <table className='Table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               { Students.map((Student)=>(      
               <tr key={Student._id}>
                    <td>{Student.name}</td>
                    <td>{Student.age}</td>
                </tr>
               ))}
            </tbody>
                 </table>
                 <div></div>


    </div>






    
    </>
  )
  
}

export default Table