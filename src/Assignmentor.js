import React from "react";
import "./Assignmentor.css";
import {useState} from "react";
import { useEffect } from "react";
import { API2 } from "./global";
import { Button } from "@mui/material";

export default function Assignmentor(){

    const[assigns,setAssigns]=useState([]);
    const getAssigns= ()=>{
     fetch(`${API2}/assign`,{
       method:"GET",
     })
     .then((data)=>data.json())
     .then((s)=>setAssigns (s));
   };
    useEffect(()=> getAssigns(),[]);
    const deleteassign=(id)=>{
      fetch(`${API2}/assign/${id}`,{
          method:'DELETE',
      }).then((data)=>data.json())
      .then(()=>getAssigns());
       };
 
  
    return (
     <div className="assignment-list-container">{assigns.map((s)=>(<Assigndata assigning ={s} deleteButton={<Button variant="contained" color="error" onClick={()=>deleteassign(s.id)}><i className="material-icons">delete</i></Button>}/>))}</div>
  );
}

function Assigndata({assigning,deleteButton}){
return(
  <div className="assignment-container">
    <p>Assign Id no.: {assigning.id}</p>
    <p>Student Name: {assigning.studentname}</p>
    <p>Mentor Name: {assigning.mentorname}</p>
    {deleteButton}
  </div>
);
}

