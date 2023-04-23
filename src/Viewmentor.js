import React from "react";
import {useState} from "react";
import { useEffect } from "react";
import { API } from "./global";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import "./Viewmentor.css";
import Editmentor from "./Editmentor";

export default function Viewmentor(){

    const[mentors,setMentors]=useState([]);
    const getMentors= ()=>{
     fetch(`${API}/mentors`,{
       method:"GET",
     })
     .then((data)=>data.json())
     .then((m)=>setMentors (m));
   };
    useEffect(()=> getMentors(),[]);
 
    const deletementor=(id)=>{
   fetch(`${API}/mentors/${id}`,{
       method:'DELETE',
   }).then((data)=>data.json())
   .then(()=>getMentors());
    };

  
    return (
     <div className="mentor-list-container">{mentors.map((s)=>(<Mentordata mentor ={s} deleteButton={<Button variant="contained" color="error" onClick={()=>deletementor(s.id)}><i className="material-icons">delete</i></Button>}/>))}</div>
  );
}

function Mentordata({mentor,deleteButton}){
  const navigate = useNavigate();
return(
  <div className="mentor-container">
    <img src={mentor.img} alt={mentor.name} className="mentor-poster"></img>
    <p className="mentor-name"><b>Mentor Name: </b>{mentor.name}</p>
    <p className="mentor-specialist"><b>Subject Specialisation: </b>{mentor.specialist}</p>
    <p  className="mentor-availability"><b>Availability: </b>{mentor.availability}</p>
    <p className="mentor-duration"><b>Period of Contract (in months): </b>{mentor.duration}</p>
    {deleteButton} <Button variant="contained" color="primary" onClick={()=>[<Editmentor eid={mentor.id}/>,navigate("/mentor/editmentor")]}>EDIT</Button>
  </div>
);
}