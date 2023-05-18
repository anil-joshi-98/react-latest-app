import Header from "./Header";
import './css/Table.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Teacher=()=>{
    
    const navigate=useNavigate();

    const [result,setResult]=useState([]);
    const [count,setCount]=useState(0);

    useEffect(()=>{
        axios.get('http://localhost:9000/').then(d=>{
            setResult(d.data);
            setCount(d.data.length);
        });
    },[]);

    const addRecord=()=>{
        navigate('/add');
    }

    const deleteRoll=(rollno)=>{
        axios.delete(`http://localhost:9000/${rollno}`);
    }

    const editResult=(rno,n,date,sc)=>{
        navigate('/editResult',{state:{rollno:rno,name:n,dob:date.substring(0,10),score:sc}})
    }

    return(
        <>
            <Header/>
            <div style={{marginLeft:'30px',marginTop:'50px',display:'inline-block'}}>
                <h6 style={{display:'inline'}}>Total {count} Students</h6>
            </div>
            <button style={{marginLeft:'89%'}} onClick={addRecord} className="btn btn-primary">Add Record</button>
            <table style={{margin:'3% 20px 20px 30px',textAlign:'center'}}>
                <thead>
                    <tr>
                        <th>Roll No.</th>
                        <th>Name</th>
                        <th>Date Of Birth</th>
                        <th>Score</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map(val=>
                        <tr key={val.rollno}>
                            <td key={val.rollno}>{val.rollno}</td>
                            <td key={val.rollno+2}>{val.name}</td>
                            <td key={val.rollno+3}>{val.dob.substring(0,10)}</td>
                            <td key={val.rollno+4}>{val.score}</td>
                            <td key={val.rollno+5}>
                                <i className="material-icons" style={{cursor:'pointer'}} onClick={()=>{ editResult(val.rollno,val.name,val.dob,val.score) }}>edit</i>
                                <i className="material-icons" style={{cursor:'pointer',marginLeft:'15px'}} onClick={()=>deleteRoll(val.rollno)}>delete</i>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}
export default Teacher