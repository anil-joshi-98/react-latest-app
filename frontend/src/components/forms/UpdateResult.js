import axios from "axios";
import {  useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";

const UpdateResult=()=>{

    const location=useLocation();
    
    const navigate=useNavigate();
    const [name,setName]=useState(location.state.name);
    const [score,setScore]=useState(location.state.score);
    const [dob,setDob]=useState(location.state.dob);
    const errorRef=useRef()


    

    const clear=()=>{
        setName('');
        setDob('');
        setScore('');    
    }

    const editResult=()=>{
        const data={
            name:name,
            dob:dob,
            score:score
        }
        if(name.length===0 || setScore.length===0 || dob.length===0){
            setTimeout(() => {
                errorRef.current.style.display="none";
            }, 2000);
            errorRef.current.style.display="inline";
    }
        else{
            axios.patch(`http://localhost:9000/edit/${location.state.rollno}`,data).then(res=>console.log(res.status));
            
            setTimeout(() => {
                navigate('/teacher');  
            }, 2000);
            errorRef.current.innerHTML="Result Updated";
            errorRef.current.style.display="inline";
            errorRef.current.style.color="green";
        }      
    }
    
    return (
        <>
            <Header show='visible'/>
            <button style={{margin:'20px 20px'}} onClick={()=>navigate('/teacher')}>Back</button>
            <div style={{marginLeft:'20%',marginTop:'3%',fontSize:'15px',fontWeight:'bold'}}>Update Result</div>
            <div style={{textAlign:'center',marginTop:'4%'}}>
                <div style={{display:'inline',fontSize:'15px'}}>Roll Number</div>
                <h6 style={{display:'inline',fontSize:'15px',marginLeft:'15%'}}>{location.state.rollno}</h6>
                <br/>
                <br/>
                <div style={{display:'inline',fontSize:'15px'}}>Name</div>
                <input placeholder="Enter name" style={{marginLeft:'61px'}} type={'text'} value={name} onChange={(e)=>{setName(e.target.value)}} />
                <br/>
                <br/>
                <div style={{display:'inline',fontSize:'15px'}}>Date Of Birth</div>
                <input style={{marginLeft:'60px'}} type={'date'} value={dob} onChange={(e)=>{setDob(e.target.value)}} />
                <br/>
                <br/>
                <div style={{display:'inline',fontSize:'15px'}} >Score</div>
                <input placeholder="Enter score in numbers" style={{marginLeft:'61px'}} type={'number'} value={score} onChange={(e)=>{setScore(e.target.value)}} />
                <br/>
                <br/>
                <h6 style={{color:'red',display:'none'}} ref={errorRef}>* Please enter all details to proceed</h6>
                <br/>
                <br/>
                <button className="btn btn-primary btn-sm" onClick={editResult}>Edit</button>
                <button className='btn btn-danger btn-sm' style={{marginLeft:'2%'}} onClick={clear}>Clear</button>
            </div>
        </>
    )
}

export default UpdateResult