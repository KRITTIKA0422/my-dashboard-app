import React from "react";
import { useFormik } from 'formik';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { API } from './global';
import "./Addstudent.css";

export default function Addstudent(){
    const validate = values => {
        const errors = {};
      
        if (!values.name) 
          errors.name = 'Field is Required';
          if (!values.course) 
          errors.course = 'Field is Required';
          if (!values.batch) 
          errors.batch = 'Field is Required';
          if (!values.join) 
          errors.join = 'Field is Required';
          if (!values.duration) 
          errors.duration = 'Field is Required';
          if (!values.img) 
          errors.img = 'Field is Required';
        return errors;
      };
     const formik=useFormik({ 
        initialValues:{name:"",course:"",batch:"",join:"",duration:"",img:""},
        validate,
        onSubmit:(studentDetails)=>{
            console.log("onSubmit",studentDetails);
            alert(JSON.stringify(studentDetails, null, 2));
            
            fetch(`${API}/students`,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(studentDetails),
            }).then((data)=>data.json());
        },

          });
  

    return(
        <div className="studentform_container">
        <h2 className="studentheader">Enter New Student Details</h2>
        <form  className="student_form" onSubmit={formik.handleSubmit}>
        <TextField id="name" label="Student Name" variant="outlined"  onChange={formik.handleChange}
        value={formik.values.name}
        name="name" />
       {formik.touched.name && formik.errors.name ? (
         <div>{formik.errors.name}</div>
       ) : null}
        <TextField id="course" label="Course Name" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.course}
        name="course" />
        {formik.touched.course && formik.errors.course ? (
         <div>{formik.errors.course}</div>
       ) : null}
         <TextField id="batch" label="Batch ID" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.batch}
        name="batch" />
        {formik.touched.batch && formik.errors.batch ? (
         <div>{formik.errors.batch}</div>
       ) : null}
       <TextField id="join" label="Joining Date (DD-MM-YYYY)" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.join}
        name="join" />
        {formik.touched.join && formik.errors.join ? (
         <div>{formik.errors.join}</div>
       ) : null}
       <TextField id="duration" label="Course Duration (IN MONTHS)" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.duration}
        name="duration" />
        {formik.touched.duration && formik.errors.duration ? (
         <div>{formik.errors.duration}</div>
       ) : null}
         <TextField id="img" label="Profile Picture (URL)" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.img}
        name="img" />
        {formik.touched.img && formik.errors.img ? (
         <div>{formik.errors.img}</div>
       ) : null}
        <Button className="buttonstudent" variant="contained" type="submit">SUBMIT STUDENT DETAILS</Button>
        </form>
        </div>
    );
}





