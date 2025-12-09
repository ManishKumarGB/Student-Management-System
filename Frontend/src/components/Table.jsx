import React from 'react'

const Table = () => {
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
                <tr>
                    <td>Manish</td>
                    <td>24</td>
                    <td>
                        <div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Arvind</td>
                    <td>25</td>
                    <td><div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Shashank</td>
                    <td>23</td>
                    <td><div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Darshan</td>
                    <td>25</td>
                    <td><div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Manyashree</td>
                    <td>23</td>
                    <td><div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                        </td>
                </tr>
            </tbody>
                 </table>
                 <div></div>


    </div>





    
    </>
  )
}

export default Table