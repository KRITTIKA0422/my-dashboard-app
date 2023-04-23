import React from "react";
import "./Assignmentor.css";
import {useState} from "react";
import { useEffect } from "react";
import { API2 } from "./global";


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
 
  
    return (
     <div className="assignment-list-container">{assigns.map((s)=>(<Assigndata assigning ={s}/>))}</div>
  );
}

function Assigndata({assigning}){
return(
  <div className="assignment-container">
    <p>Student Name: {assigning.studentname}</p>
    <p>Mentor Name: {assigning.mentorname}</p>
  </div>
);
}

