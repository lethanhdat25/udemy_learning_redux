import classes from './Auth.module.css';
import {Formik} from 'formik';
import * as yup from "yup";
import Input from "./auth_input/Input";
import {useRef} from "react";

const Auth = () => {
    const emailRef=useRef();
    const passwordRef=useRef();
    const schema = yup.object().shape({
        email: yup.string().required(()=>{emailRef.current.focus();return "bat buoc"}).min(5,()=>{emailRef.current.focus();return 'Must be exactly 5 digits'}).email(()=>{emailRef.current.focus();return "sai form"}),
        password: yup.string()
            .required()
            .matches(/^[0-9]+$/, ()=>{passwordRef.current.focus();return "Must be only digits"})
            .min(5, ()=>{passwordRef.current.focus();return "Must be 5 digits"})
    })

    return (
        <main className={classes.auth}>
            <section>
                <Formik initialValues={{
                    email: "",
                    password: "",
                }} onSubmit={(values) => {
                    console.log(values)
                }} validationSchema={schema}>
                    {({values, handleSubmit, touched, handleBlur, handleChange, errors, handleReset}) => {
                        return <form onSubmit={handleSubmit}>
                            <Input ref={emailRef} label="Email" value={values.email}  id='email' name={"email"} onBlur={handleBlur}
                                   onChange={handleChange} touched={touched.email} errors={errors.email} />
                            <Input ref={passwordRef} label="Password" value={values.password} type='password' id='password' name={"password"}
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
