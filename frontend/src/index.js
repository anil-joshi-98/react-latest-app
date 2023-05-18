import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Student from './components/Student';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Teacher from './components/Teacher';
import ShowResult from './components/ShowResult'
import UpdateResult from './components/forms/UpdateResult';
import AddResult from './components/forms/AddResult';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>  
          <Route path='/' element={<App/>}/>
          <Route path='/teacher'  element={<Teacher/>}/>
          <Route path='/student'  element={<Student/>}/>
          <Route path='/add'  element={<AddResult/>}/>
          <Route path='/printData' element={<ShowResult/>} />
          <Route path='/editResult' element={<UpdateResult/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);
reportWebVitals();
