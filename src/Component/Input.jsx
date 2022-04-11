import { useState } from "react";

const Input = () => {

    const [input,setinput]=useState({
        name : ' ',
        email : ' '
    });
    let {name,email}=input;

    const [alertmes,setalert]=useState({
        msg : ' ',
        type : ' ',
        status : false
    })
        
        
        const handleforSumit =(e)=>{
        e.preventDefault()

        if(name===' ' || email===' ' ){
            setalert({
                msg : 'All filed are required',
                type : 'danger',
                status : true
            })
        }
        else{
            setalert({
                msg : 'Data Stable',
                type : 'Success',
                status : true
            })
        }
        setinput ({
            name : ' ',
            email : ' '
        })
    }

    const handleclose=()=>{
        setalert({
            msg : ' ',
            type : 'Success',
            status :false
        })
    }

    return ( 
        <div className="container">
            <div class="row">
                <div className="col-md-4">
                    <div className="card">
                        <h2 className="text-center">Create A user</h2>
                          {
                              alertmes.status && <p className={`alert d-flex justify-content-between  alert-${alertmes.type}`}>{alertmes.msg} <button onClick={handleclose}  className="btn-close"></button> </p>
                          } 
                        <form onSubmit={handleforSumit} action="">
                        <div className="my-3">
                            <label htmlFor="">Name</label>
                            <input className="form-control" type="text" value={name} onChange={e=> setinput({ ...input, name : e.target.value})} />
                        </div>

                        <div className="my-3">
                            <label htmlFor="">Email</label>
                            <input className="form-control" type="Email" value={email} onChange={e=> setinput({ ...input, email : e.target.value})} />
                        </div>
                        <div className="my-3">
                            <input className="btn btn-primary" type="submit" />
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Input;