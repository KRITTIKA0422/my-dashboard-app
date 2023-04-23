import React from "react";
import Mainpage from "./Mainpage";
import { useNavigate } from 'react-router-dom';
import Student from "./Student";
import Mentor from "./Mentor";
import Assignment from "./Assignment";
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
          <button className="main_button"  onClick={()=>navigate("/")}>HOME PAGE</button>
          <button className="student_button"  onClick={()=>navigate("/student")}>STUDENT DASHBOARD</button>
          <button className="mentor_button"  onClick={()=>navigate("/mentor")}>MENTOR DASHBOARD</button>
          <button className="assigns_button"  onClick={()=>navigate("/assign")}>MENTOR-STUDENT ASSIGNMENT</button>
       <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/student/*" element={<Student />} />
        <Route path="/mentor/*" element={<Mentor />} />
        <Route path="/assign/*" element={<Assignment />} />
      </Routes>         
    </div>
  );
}

export default App;
