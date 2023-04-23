import React from "react";
import { Routes, Route } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Assignmentor from "./Assignmentor";
import Assignform from "./Assignform";
import "./Assignment.css";

export default function Assignment(){
    const navigate = useNavigate(); 
    return(
        <div className="assignment">
    <nav className="routing">
      <AppBar position="static">
        <Toolbar>
        <Button color="inherit" onClick={()=>navigate("/assign")}>ASSIGNED MENTOR-STUDENT</Button>
        <Button color="inherit" onClick={()=>navigate("/assign/assignform")}>ASSIGN MENTOR</Button>
        </Toolbar>
      </AppBar>
      </nav> 
      <Routes>
 <Route path="/" element={<Assignmentor />} />
  <Route path="/assignform" element={<Assignform />} />
</Routes> 
           </div>
    );
}