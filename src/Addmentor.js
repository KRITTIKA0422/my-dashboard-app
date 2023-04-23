import React from "react";
import { useFormik } from 'formik';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { API } from './global';
import "./Addmentor.css";

export default function Addmentor(){
    const validate = values => {
        const errors = {};
      
        if (!values.name) 
          errors.name = 'Field is Required';
          if (!values.specialist) 
          errors.specialist = 'Field is Required';
          if (!values.availability) 
          errors.availability = 'Field is Required';
          if (!values.duration) 
          errors.duration = 'Field is Required';
          if (!values.img) 
          errors.img = 'Field is Required';
        return errors;
      };
     const formik=useFormik({ 
        initialValues:{name:"",specialist:"",availability:"",duration:"",img:""},
        validate,
        onSubmit:(mentorDetails)=>{
            console.log("onSubmit",mentorDetails);
            alert(JSON.stringify(mentorDetails, null, 2));
            
            fetch(`${API}/mentors`,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(mentorDetails),
            }).then((data)=>data.json());
        },

          });
  

    return(
        <div className="mentorform_container">
        <h2 className="mentorheader">Enter New Mentor Details</h2>
        <form  className="mentor_form" onSubmit={formik.handleSubmit}>
        <TextField id="name" label="Mentor Name" variant="outlined"  onChange={formik.handleChange}
        value={formik.values.name}
        name="name" />
       {formik.touched.name && formik.errors.name ? (
         <div>{formik.errors.name}</div>
       ) : null}
        <TextField id="specialist" label="Subject Specialisation" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.specialist}
        name="specialist" />
        {formik.touched.specialist && formik.errors.specialist ? (
         <div>{formik.errors.specialist}</div>
       ) : null}
         <TextField id="availability" label="Availability (Weekday/Weekend)" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.availability}
        name="availability" />
        {formik.touched.availability && formik.errors.availability ? (
         <div>{formik.errors.availability}</div>
       ) : null}
       <TextField id="duration" label="Period of Contract (IN MONTHS)" variant="outlined"  
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
        <Button className="buttonmentor" variant="contained" type="submit">SUBMIT MENTOR DETAILS</Button>
        </form>
        </div>
    );
}