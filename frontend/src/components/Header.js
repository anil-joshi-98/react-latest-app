import { useNavigate } from 'react-router-dom';
import './css/Header.css'
const Header=(props)=>{

    const navigate=useNavigate();

    return(
        <div className="head">
            <span style={{marginLeft:'35%'}}>Result Management System </span>
            <button className='btn btn-sm btn-warning logout' style={{visibility:`${props.show}`}} onClick={()=>{navigate('/')}} >Logout</button>
        </div>
    )
}

export default Header;