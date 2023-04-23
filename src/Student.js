import React from "react";
import { Routes, Route } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Viewstudent from "./Viewstudent";
import Addstudent from "./Addstudent";
import Editstudent from "./Editstudent";
import "./Student.css";

export default function Student(){
    const navigate = useNavigate(); 
    return(
        <div className="student">
    <nav className="routing">
      <AppBar position="static">
        <Toolbar>
        <Button color="inherit" onClick={()=>navigate("/student")}>VIEW STUDENTS</Button>
        <Button color="inherit" onClick={()=>navigate("/student/addstudent")}>ADD STUDENT</Button>
        </Toolbar>
      </AppBar>
      </nav> 
      <Routes>
 <Route path="/" element={<Viewstudent />} />
  <Route path="/addstudent" element={<Addstudent />} />
  <Route path="/editstudent" element={<Editstudent />} />
</Routes> 
           </div>
    );
}