import { useLocation, useNavigate } from "react-router-dom"
import Header from "./Header";

const ShowResult=()=>{

    const location=useLocation();
    const navigate=useNavigate();
    return(
        <>
            <Header show='visible'/>
            <button style={{margin:'20px 20px'}} onClick={()=>navigate('/student')}>Back</button>
            <div style={{marginLeft:'30%',marginTop:'3%',fontSize:'15px',fontWeight:'bold'}}>Result</div>
            <div style={{textAlign:'center',marginTop:'4%'}}>
                <div style={{display:'inline',fontSize:'15px'}}>Roll no.</div>
                <span style={{marginLeft:'20px'}} >{location.state.id}</span>
                <br/>
                <br/><div style={{display:'inline',fontSize:'15px'}}>Name</div>
                <span style={{marginLeft:'20px'}} >{location.state.name}</span>
                <br/>
                <br/><div style={{display:'inline',fontSize:'15px'}}>Date of Birth</div>
                <span style={{marginLeft:'20px'}} >{location.state.dob.substring(0,10)}</span>
                <br/>
                <br/>
                <div style={{display:'inline',fontSize:'15px'}}>Score</div>
                <span style={{marginLeft:'20px'}} >{location.state.score}</span>
                <br/>
                <br/>
            </div>
        </>
    );
}

export default ShowResult;