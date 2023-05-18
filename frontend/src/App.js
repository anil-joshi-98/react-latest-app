
import Header from './components/Header';
import './app.css';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate=useNavigate();

  const teacherClick=()=>{
      navigate('/teacher');
  }

  const studentClick=()=>{
      navigate('/student');
  }

  return (
    <div>
      <Header show="hidden"/>
      <div style={{textAlign:'center',marginTop:'10%'}}>
        Login As
        <div style={{marginTop:'4%'}}>
            <span className='teacherStyle' onClick={teacherClick}>
              Teacher
            </span>
            <span className='studentStyle' onClick={studentClick}>
              Student
            </span>
        </div>
      </div>
    </div>
  );
}

export default App;
