import classes from './Register.module.css';
import {Formik} from 'formik';


import {useRef} from "react";
import Input from "./auth_input/Input";
import axios from "axios";
import {schema} from "./schema/RegisterSchema";

const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    return (
        <main className={classes.auth}>
            <section>
                <Formik initialValues={{
                    email: "",
                    password: "",
                    name: ""
                }} onSubmit={async (values, {resetForm}) => {
                    const res = await axios.post("https://media-player-be.herokuapp.com/api/users/register", {
                        email: values.email,
                        password: values.password,
                        username: values.name
                    });
                    resetForm();
                    console.log(res);
                }} validationSchema={()=>schema(emailRef,passwordRef,nameRef)}>
                    {({values, handleSubmit, touched, handleBlur, handleChange, errors, handleReset}) => {
                        return <form onSubmit={handleSubmit}>
                            <Input ref={emailRef} label="Email" value={values.email} id='email' name={"email"}
                                   onBlur={handleBlur}
                                   onChange={handleChange} touched={touched.email} errors={errors.email}/>
                            <Input ref={passwordRef} label="Password" value={values.password} type='password'
                                   id='password' name={"password"}
                                   onBlur={handleBlur} onChange={handleChange} touched={touched.password}
                                   errors={errors.password}/>
                            <Input ref={nameRef} label="Name" value={values.name} id='name' name={"name"}
                                   onBlur={handleBlur} onChange={handleChange} touched={touched.name}
                                   errors={errors.name}/>
                            <button type={"submit"}>Login</button>
                            <button type={"button"} onClick={handleReset}>Reset</button>
                        </form>
                    }}
                </Formik>

            </section>
        </main>
    );
};
export default Register;