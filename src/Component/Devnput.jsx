import React, { useState } from "react";


const Okkkkkk = () => {

  const[hellow,setHellow]=useState('I love');
    return (
    
      <div className="container">
      <div class="row">
        <div className="col-md-4">
          <div className="card">
          <h4 className="card-title text-center">Create a new User</h4>
            <div className="card-body">
                <input className='form-control' value={hellow} onChange={  e=> setHellow(e.target.value)   } type='text'/>
            </div>
          </div>
          </div>
          <div className="col-md-8">
            <h1>{hellow}</h1>
          </div>
        
      </div>
    </div>

);
}
 
export default Okkkkkk;

