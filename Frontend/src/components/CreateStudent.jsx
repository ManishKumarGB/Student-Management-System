import React, { useState } from 'react'
import { addStudent } from '../services/api';

const CreateStudent = () => {
  const [name,setName] =useState('');
  const[age,setAge]=useState(0);

  const [message,setMessage] =useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const createstudentresponse= addStudent({name,age});
    setMessage(createstudentresponse);
  }


  return (
    <>
    <h2>CreateStudent</h2>
    <form onSubmit={handleSubmit}>
      <div>
      <label>Name</label>
      <input type="text"
       value={name} 
       onChange = {(e) =>setName(e.target.value)}
       />
      </div>
      <div>
      <label htmlFor="">Age</label>
      <input type="number" 
      value={age}
      onChange={(e)=>setAge(e.target.value)}
       />
      </div>

      <button type='submit'>Submit</button>
      <div>{message}</div>
    </form>

    </>
    
  )
}

export default CreateStudent