import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useFormik, Field } from "formik";
import Checkbox from '@material-ui/core/Checkbox';
import * as Yup from "yup";
import './Login.css'



const Login = ({ logIn }) => {
    let navigate = useNavigate();

    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: false
        },

        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email('invalidemailformat')
                .required("Required"),
            password: Yup.string()
                .matches(/^\S*$/, 'Whitespace is not allowed')
                .matches(
                    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#!@$%^&*()+=]).{8,20}$',
                    `Should contains at least 8 characters and at most 20 characters\n 
            Should contains at least one digit\n 
            Should contains at least one upper case alphabet\n 
            Should contains at least one lower case alphabet\n
            Should contains at least one special character which includes !@#$%&*()+=^\n
            Should doesn't contain any white space`
                )
                .required('password is required'),
        }),

        onSubmit: (values) => {
            console.log(values);
            setIsSubmitSuccess(true);
            localStorage.setItem("user", JSON.stringify({ role: "ADMIN" }))
            navigate("/dashboard")
        },
    });


    return (

        <div className="form">
            <form onSubmit={formik.handleSubmit} style={{ width: "450px" }}>
                <h3>LogIn</h3>
                <div className="form-group m-3 ">

                    <label htmlFor="email">Email</label>
                    <input
                        className="mt-3 m-3"
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div style={{ color: 'red' }} className="error_msg">{formik.errors.email}</div>
                    ) : null}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                        className="m-2 w-90"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password} />
                    {formik.touched.password && formik.errors.password ? (
                        <div style={{ color: 'red' }} className="error_msg">{formik.errors.password}</div>
                    ) : null}
                </div>

                <label htmlFor="rememberMe" style={{ display: "inline" }}>
                    remember me
                </label>
                <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    defaultChecked={formik.values.rememberMe}
                    {...formik.getFieldProps("rememberMe")}
                />

                {/* <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={logIn}>
                    Login
                </button> */}
                        <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={logIn} style={{ display: "block" }}>Login</button>


            </form>
        </div>
    );
};

export default Login;