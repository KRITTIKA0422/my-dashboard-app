import React from "react";
import { useFormik } from 'formik';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { API } from './global';
import "./Editmentor.css";

export default function Editmentor({eid}){
     
     const formik=useFormik({ 
        initialValues:{name:"",specialist:"",availability:"",duration:"",img:""},
        onSubmit:(editmentorDetails)=>{
            console.log("onSubmit",editmentorDetails);
            alert(JSON.stringify(editmentorDetails, null, 2));
            console.log(eid);
            fetch(`${API}/mentors/${eid}`,{
                method:'UPDATE',
                headers:{
                    'Content-type':'application/json',
                        "Access-Control-Allow-Headers" : "Content-Type",
                        "Access-Control-Allow-Origin": `${API}/mentors`,
                        "Access-Control-Allow-Methods": "UPDATE,POST,GET"
                },
                body: JSON.stringify(editmentorDetails),
            }).then((data)=>data.json());
        },

          });
          
    return(
        <div className="mentorform_container">
        <h2 className="mentorheader">Edit Mentor Details</h2>
        <form  className="mentor_form" onSubmit={formik.handleSubmit}>
        <TextField id="name" label="Mentor Name" variant="outlined"  onChange={formik.handleChange}
        value={formik.values.name}
        name="name" />
        <TextField id="specialist" label="Subject Specialisation" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.specialist}
        name="specialist" />   
         <TextField id="availability" label="Availability (Weekday/Weekend)" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.availability}
        name="availability" />   
       <TextField id="duration" label="Period of Contract (IN MONTHS)" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.duration}
        name="duration" />
         <TextField id="img" label="Profile Picture (URL)" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.img}
        name="img" />
        <Button className="buttonmentor" variant="contained" type="submit">UPDATE MENTOR DETAILS</Button>
        </form>
        </div>
    );
}
