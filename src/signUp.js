import React from "react";
import { Formik, Form, Field, ErrorMessage } from   "formik";

import * as yup from "yup";
const signUp = () =>{

       const defaultvalue ={

        name: "",
        email: "",
        password:"",
        };


        const validationSchema = yup.object().shape({

        name:yup.string().required("please enter name "),
        email:yup.string().required("please enter email "),
        password:yup.string().required("please enter password"),

        });

         const handleSubmit =(values) => {
            console.log("values :", values);
         }


         return(
              <>
              <Formik

                initialValues={defaultvalue}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                >
                <Form>
                 <div className="col-md-2 mt-4 ml-23" style={{textAlign:"center", backgroundColor:"pink",}} >
                         <h1>Login form</h1>
                
                 <Field
                 type="text"
                 name="name"
                 placeholder="enter youre name"
                 className="form-control"/>
                 <p className="text-danger">
                    <ErrorMessage name="name"></ErrorMessage>
                 </p>
                 <Field
                 type="text"
                 name="email"
                 placeholder="enter yor email"
                 className="form-control"/>
                 <p className="text-danger">
                    <ErrorMessage name="name"></ErrorMessage>
                 </p>
                 
                 <Field
                 type="text"
                 name="password"
                 placeholder="enter yor password"
                 
                 className="form-control"/>
                 <p className="text-danger">
                    <ErrorMessage name="name"></ErrorMessage>
                 </p>


                 <button type="submi">submit</button>
                 </div>

                </Form>
                </Formik>
              </>
         );
     

};
export default signUp;