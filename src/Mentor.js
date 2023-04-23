    import React from "react";
    import { Routes, Route } from "react-router-dom";
    import AppBar from '@mui/material/AppBar';
    import Toolbar from '@mui/material/Toolbar';
    import Button from '@mui/material/Button';
    import { useNavigate } from 'react-router-dom';
    import Viewmentor from "./Viewmentor";
    import Addmentor from "./Addmentor";
    import Editmentor from "./Editmentor";
    import "./Mentor.css";

export default function Mentor(){
 
        const navigate = useNavigate(); 
        return(
            <div className="mentor">
        <nav className="routing">
          <AppBar position="static">
            <Toolbar>
            <Button color="inherit" onClick={()=>navigate("/mentor")}>VIEW MENTORS</Button>
            <Button color="inherit" onClick={()=>navigate("/mentor/addmentor")}>ADD MENTORS</Button>
            </Toolbar>
          </AppBar>
          </nav> 
          <Routes>
     <Route path="/" element={<Viewmentor />} />
      <Route path="/addmentor" element={<Addmentor />} />
      <Route path="/editmentor" element={<Editmentor />} />
    </Routes> 
               </div>
        );
    }
