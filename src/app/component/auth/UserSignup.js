import React from 'react';
import './signup.css'

import{Formik, Form, Field, ErrorMessage, validateYupSchema} from "formik";
import * as yup from "yup";
const Signup = () => {
  const defaultValue ={
    name: "",
    email: "",
    password:"",
  };

  const validationSchema= yup.object().shape({
    name: yup.string().required("please enter name"),
    email: yup.string().required().email("please enter email"),
    password: yup.string().required("please enter password"),
  });
  
  
  
  const handleSubmit = (value)=>{
    console.log("Value:", value);
  };

  return (
    <>
    
  
      <Formik 
      initialValues={defaultValue}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      
     
      
      <Form>
      
      <div class="hp">
        <h1>welcome</h1>
        <p>lorem ipsum dolor sit amet, consectur<br></br>
            adipiscing elit.</p></div>
          
          
        <div className='backimg'>
        <h1 className='log'> Login</h1>
        <p className='highp'> 
            Hello! Please enter your details for Signup.</p>


        <div className='frmbox'>
        <Field type= "text"
        name="name"
        placeholder="Enter your name"
        className="form-control"
        
        />
<p className='text-danger'>
<ErrorMessage name="name"/>
</p>
        
</div>

<div className='frmbox'>
        <Field type= "email"
        name="email"
        placeholder="Enter your email"
        className="form-control"
        
        />
<p className='text-danger'>
<ErrorMessage name="name"/>
</p>
        
</div>
<div className='frmbox'>
        <Field type= "password"
        name="password"
        placeholder="Enter your password"
        className="form-control"
        />
<p className='text-danger'>
<ErrorMessage name="name"/>
</p>
</div>
<p className='forgot'> Forgot password?</p>
       
      <button> login</button>
      <hr></hr>
      <p className='footer'>I don't have an account on Review & Rate</p>
<h6 className='footerh'><strong>Register Now</strong></h6>
</div>
</Form>

      </Formik>
    </>
  );
};

export default Signup;
