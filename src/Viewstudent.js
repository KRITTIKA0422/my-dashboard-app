import React from "react";
import {useState} from "react";
import { useEffect } from "react";
import { API } from "./global";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import "./Viewstudent.css";
import Editstudent from "./Editstudent";

export default function Viewstudent(){

    const[students,setStudents]=useState([]);
    const getStudents= ()=>{
     fetch(`${API}/students`,{
       method:"GET",
     })
     .then((data)=>data.json())
     .then((s)=>setStudents (s));
   };
    useEffect(()=> getStudents(),[]);
 
    const deletestudent=(id)=>{
   fetch(`${API}/students/${id}`,{
       method:'DELETE',
   }).then((data)=>data.json())
   .then(()=>getStudents());
    };

  
    return (
     <div className="student-list-container">{students.map((s)=>(<Studentdata student ={s} deleteButton={<Button variant="contained" color="error" onClick={()=>deletestudent(s.id)}><i className="material-icons">delete</i></Button>}/>))}</div>
  );
}

function Studentdata({student,deleteButton}){
  const navigate = useNavigate();
return(
  <div className="student-container">
    <img src={student.img} alt={student.name} className="student-poster"></img>
    <p className="student-name"><b>Student Name: </b>{student.name}</p>
    <p  className="student-course"><b>Course: </b>{student.course}</p>
    <p className="student-batch"><b>Batch ID: </b>{student.batch}</p>
    <p className="student-join"><b>Joining Date: </b>{student.join}</p>
    <p className="student-duration"><b>Course Duration (in months): </b>{student.duration}</p>
   {deleteButton} <Button variant="contained" color="primary" onClick={()=>[<Editstudent eid={student.id}/>,navigate("/student/editstudent")]}>EDIT</Button>
  </div>
);
}