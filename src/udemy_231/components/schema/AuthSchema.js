import * as yup from "yup";


export const schema =(emailRef,passwordRef,nameRef)=>{
    const email=()=>{
        return emailRef&&{
            email: yup.string().required(() => {
                emailRef.current.focus();
                return "bat buoc"
            }).min(5, () => {
                emailRef.current.focus();
                return 'Must be exactly 5 digits'
            }).email(() => {
                emailRef.current.focus();
                return "sai form"
            })}
    }
    const password=()=>{
        return passwordRef&&{
            password: yup.string().required(() => {
                return "bat buoc"
            }).matches(/^[0-9]+$/, () => {
                passwordRef.current.focus();
                return "Must be only digits"
            }).min(5, () => {
                passwordRef.current.focus();
                return "Must be 5 digits"
            })
        }
    }
    const name=()=>{
        return nameRef&&{
            name: yup.string().required(() => {
                return "bat buoc"
            }).min(5, () => {
                nameRef.current.focus();
                return 'Must be exactly 5 digits'
            })
        }
    }

   return  yup.object().shape({
        ...email(),
        ...password(),
        ...name(),
    })
}