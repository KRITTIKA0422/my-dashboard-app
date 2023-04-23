import React from "react";
import { useFormik } from 'formik';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { API } from './global';
import "./Editstudent.css";

export default function Editstudent({eid}){
     
     const formik=useFormik({ 
        initialValues:{name:"",course:"",batch:"",join:"",duration:"",img:""},
        onSubmit:(editstudentDetails)=>{
            console.log("onSubmit",editstudentDetails);
            alert(JSON.stringify(editstudentDetails, null, 2));
            console.log(eid);
            fetch(`${API}/students/${eid}`,{
                method:'UPDATE',
                headers:{
                    'Content-type':'application/json',
                        "Access-Control-Allow-Headers" : "Content-Type",
                        "Access-Control-Allow-Origin": `${API}/students`,
                        "Access-Control-Allow-Methods": "UPDATE,POST,GET"
                },
                body: JSON.stringify(editstudentDetails),
            }).then((data)=>data.json());
        },

          });
          
    return(
        <div className="studentform_container">
        <h2 className="studentheader">Edit Student Details</h2>
        <form  className="student_form" onSubmit={formik.handleSubmit}>
        <TextField id="name" label="Student Name" variant="outlined"  onChange={formik.handleChange}
        value={formik.values.name}
        name="name" />
        <TextField id="course" label="Course Name" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.course}
        name="course" />
         <TextField id="batch" label="Batch ID" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.batch}
        name="batch" />
       <TextField id="join" label="Joining Date (DD-MM-YYYY)" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.join}
        name="join" />
       <TextField id="duration" label="Course Duration (IN MONTHS)" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.duration}
        name="duration" />
         <TextField id="img" label="Profile Picture (URL)" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.img}
        name="img" />
        <Button className="buttonstudent" variant="contained" type="submit">UPDATE STUDENT DETAILS</Button>
        </form>
        </div>
    );
}




