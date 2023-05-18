import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

const AddResult=()=>{

    const navigate=useNavigate();
    const [name,setName]=useState('');
    const [roll,setRoll]=useState('');
    const [score,setScore]=useState('');
    const [dob,setDob]=useState();
    const errorRef=useRef()

    const clear=()=>{
        setName('');
        setRoll('');
        setDob('');
        setScore('');    
    }

    const addResult=()=>{
        const obj={
            rollno:roll,
            name:name,
            dob:dob,
            score:score
        }
        if(name.length===0 || roll.length===0 || setScore.length===0 || dob.length===0){
            setTimeout(() => {
                errorRef.current.style.display="none";
            }, 2000);
            errorRef.current.style.display="inline";
    }
        else{
            axios.post('http://localhost:9000/addResult/',obj).then(res=>console.log(res.json()));
            setTimeout(() => {
                navigate('/teacher');  
            }, 2000);
            errorRef.current.innerHTML="success";
            errorRef.current.style.display="inline";
            errorRef.current.style.color="green";
        }      
    }
    
    return (
        <>
            <Header show='visible'/>
            <button style={{margin:'20px 20px'}} onClick={()=>navigate('/teacher')}>Back</button>
            <div style={{marginLeft:'20%',marginTop:'3%',fontSize:'15px',fontWeight:'bold'}}>Add New Result</div>
            <div style={{textAlign:'center',marginTop:'4%'}}>
                <div style={{display:'inline',fontSize:'15px'}}>Roll Number</div>
                <input placeholder="Enter roll number" style={{marginLeft:'20px'}} type={'number'} value={roll} onChange={(e)=>{setRoll(e.target.value)}} />
                <br/>
                <br/>
                <div style={{display:'inline',fontSize:'15px'}}>Name</div>
                <input placeholder="Enter name" style={{marginLeft:'61px'}} type={'text'} value={name} onChange={(e)=>{setName(e.target.value)}} />
                <br/>
                <br/>
                <div style={{display:'inline',fontSize:'15px'}}>Date Of Birth</div>
                <input placeholder="Enter date of birth" style={{marginLeft:'60px'}} type={'date'} value={dob} onChange={(e)=>{setDob(e.target.value)}} />
                <br/>
                <br/>
                <div style={{display:'inline',fontSize:'15px'}} >Score</div>
                <input placeholder="Enter Score" style={{marginLeft:'61px'}} type={'number'} value={score} onChange={(e)=>{setScore(e.target.value)}} />
                <br/>
                <br/>
                <h6 style={{color:'red',display:'none'}} ref={errorRef}>* Please enter all details to proceed</h6>
                <br/>
                <br/>
                <button className="btn btn-primary btn-sm" onClick={addResult}>Add</button>
                <button className='btn btn-danger btn-sm' style={{marginLeft:'2%'}} onClick={clear}>Clear</button>
            </div>
        </>
    )
}
export default AddResult;