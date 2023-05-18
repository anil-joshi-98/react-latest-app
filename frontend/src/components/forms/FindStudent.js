import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const FindStudent=()=>{

    const [name,setName]=useState('');
    const [roll,setRoll]=useState('');

    const navigate=useNavigate();
    const errorRef=useRef();

    const clear=()=>{
        setName('');
        setRoll('');
    }

    const serach=()=>{
        if(roll.length===0 || name.length===0){
            errorRef.current.innerHTML="* Please enter all details to proceed";
            setTimeout(() => {
                errorRef.current.style.display="none";
            }, 2000);
            errorRef.current.style.display="inline";
        }
        else
        {
            axios.get(`http://localhost:9000/getResult/${roll}/${name}`).then((data)=>{
                
                    navigate('/printData',{state:{id:roll,name:name,dob:data.data[0].dob,score:data.data[0].score}})
                }
            )
            .catch((err)=>{
                setTimeout(() => {
                    errorRef.current.style.display="none";
                }, 2000);
                errorRef.current.innerHTML="* No Result Found";
                errorRef.current.style.display="inline";
            })
        }
    }
    
    return (
        <>
            <div style={{marginLeft:'30%',marginTop:'5%',fontSize:'15px'}}>Find Result</div>
            <div style={{textAlign:'center',marginTop:'4%'}}>
                <div style={{display:'inline',fontSize:'15px'}}>Roll Number</div>
                <input  placeholder="Enter roll number" style={{marginLeft:'20px'}} type={'number'} value={roll} onChange={(e)=>{setRoll(e.target.value)}} />
                <br/>
                <br/>
                <div style={{display:'inline',fontSize:'15px'}}>Name</div>
                <input placeholder="Enter name" style={{marginLeft:'61px'}} type={'text'} value={name} onChange={(e)=>{setName(e.target.value)}} />
                <br/>
                <br/>
                <h6 style={{color:'red',display:'none'}} ref={errorRef}>* Please enter all details to proceed</h6>
                <br/>
                <br/>
                <button className="btn btn-primary btn-sm" onClick={serach}>Search</button>
                <button className='btn btn-danger btn-sm' style={{marginLeft:'2%'}} onClick={clear}>Clear</button>
            </div>
        </>
    )
}

export default FindStudent;