import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';


export default function Basicvalidation() {
    // let navigate = useNavigate();
    const formik = useFormik({
        
        initialValues:{
            email: "",
            age: "",
            password:"",
            confirmpassword:"",
        },
    });
    // navigate("/show")
    console.log(formik);
  return (
    
    <form autoComplete='off'>
    <div>Basic  Validation  Form</div> 
    <label htmlFor="email">Email</label>
    <input type="email" value={formik.values.email} onChange={formik.handleChange} id="email" placeholder='Enter your Email' />
    
    <label htmlFor="age">Age</label>
    <input type="number" id='age' placeholder='enter your age' value={formik.values.age}  />
    </form>
  )
}

