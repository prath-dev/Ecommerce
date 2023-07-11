import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import "./Signin.css"

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignIn = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
       
     console.log(values)
      },
    });
    console.log(errors)

  return (
    <>
  
        <div className="form-container">
          <div className="form-card">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Sign up!</h1>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                   
                    <input
                      type="name"
                      class="form-input"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                   
                    <input
                      type="email"
                      class="form-input"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                 
                    <input
                      type="password"
                      class="form-input"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                   
                    <input
                      type="password"
                      class="form-input"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
                  </div>
                 
                  <div class="form-btn" type="submit">
      <a class="btn1" href="login">Register</a>
        </div>
                    <Link to ="/login">
                    <div class="login">
                <a href="login"> Already have Account? LogIn</a>
            </div>
            </Link>
                </form>
               
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default SignIn;