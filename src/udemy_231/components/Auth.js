import classes from './Auth.module.css';
import {Formik} from 'formik';
import Input from "./auth_input/Input";
import {useRef} from "react";
import {schema} from "./schema/AuthSchema";
import axios from "axios";

const Auth = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    return (
        <main className={classes.auth}>
            <section>
                <Formik initialValues={{
                    email: "",
                    password: "",
                }} onSubmit={async (values,{resetForm}) => {
                    const res = await axios.post("https://media-player-be.herokuapp.com/api/users/login",{
                        email:values.email,
                        password:values.password
                    });
                    resetForm();
                    console.log(res);
                }} validationSchema={() => schema(emailRef, passwordRef)}>
                    {({values, handleSubmit, touched, handleBlur, handleChange, errors, handleReset}) => {
                        return <form onSubmit={handleSubmit}>
                            <Input ref={emailRef} label="Email" value={values.email} id='email' name={"email"}
                                   onBlur={handleBlur}
                                   onChange={handleChange} touched={touched.email} errors={errors.email}/>
                            <Input ref={passwordRef} label="Password" value={values.password} type='password'
                                   id='password' name={"password"}
                                   onBlur={handleBlur} onChange={handleChange} touched={touched.password}
                                   errors={errors.password}/>
                            <button type={"submit"}>Login</button>
                            <button type={"button"} onClick={handleReset}>Reset</button>
                        </form>
                    }}
                </Formik>

            </section>
        </main>
    );
};

export default Auth;
