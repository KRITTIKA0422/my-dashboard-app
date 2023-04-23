import React from "react";
import { useFormik } from 'formik';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import "./Assignform.css";
import { API2 } from "./global";

export default function Assignform(){ 
    const validate = values => {
        const errors = {};
        if (!values.id) 
        errors.id = 'Field is Required';
        if (!values.mentorname) 
          errors.mentorname = 'Field is Required';
          if (!values.studentname) 
          errors.studentname = 'Field is Required';
        return errors;
      };
     const formik=useFormik({ 
        initialValues:{id:"",mentorname:"",studentname:""},
        validate,
        onSubmit:(assignDetails)=>{
            console.log("onSubmit",assignDetails);
            alert(JSON.stringify(assignDetails, null, 2));
            fetch(`${API2}/assign`,{
              method:'POST',
              headers:{
                  'Content-type':'application/json'
              },
              body: JSON.stringify(assignDetails),
          }).then((data)=>data.json());
      },

        });
  

    return(
        <div className="assignform_container">
        <h2 className="assignheader">Assigning Mentor to Student</h2>
        <form  className="assign_form" onSubmit={formik.handleSubmit}>
        <TextField id="id" label="Assign ID no." variant="outlined"  onChange={formik.handleChange}
        value={formik.values.id}
        name="id" />
       {formik.touched.id && formik.errors.id ? (
         <div>{formik.errors.id}</div>
       ) : null}
        <TextField id="mentorname" label="Mentor Name" variant="outlined"  onChange={formik.handleChange}
        value={formik.values.mentorname}
        name="mentorname" />
       {formik.touched.mentorname && formik.errors.mentorname ? (
         <div>{formik.errors.mentorname}</div>
       ) : null}
       <TextField id="studentname" label="Student Name" variant="outlined"  onChange={formik.handleChange}
        value={formik.values.studentname}
        name="studentname" />
       {formik.touched.studentname && formik.errors.studentname ? (
         <div>{formik.errors.studentname}</div>
       ) : null}
        <Button className="assignbutton" variant="contained" type="submit">ASSIGN</Button>
        </form>
        </div>
    );
}

