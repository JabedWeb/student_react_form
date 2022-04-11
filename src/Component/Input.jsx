import axios from "axios";
import { useEffect, useState } from "react";

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


            axios.post('http://localhost:5050/users',{
                name : name,
                email : email
            }).then(res=>{
                setalert({
                    msg : 'Data Stable',
                    type : 'Success',
                    status : true
                })
                setinput ({
                    name : ' ',
                    email : ' '
                })
            }).catch(error=>{
                console.log(error);
            })
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

    const [users,setUsers]=useState([])
    console.log(users)
    useEffect(()=>{
        axios.get('http://localhost:5050/users').then(res=>{
            setUsers(res.data)
        })
    },[users])

    const handleDeled =(id) =>{
        axios.delete('http://localhost:5050/users/'+id).then(res=>{
        
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
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <table className="table">
                            <thead>

                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((data,index)=>
                                <tr>
                            <th scope="row">1</th>
                            <td>{index+1}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td><button onClick={ ()=> handleDeled(data.id)} className="btn btn-primary btn-sm">Deled</button></td>
                           
                            </tr>
                                    )
                            }
                            
                        </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Input;