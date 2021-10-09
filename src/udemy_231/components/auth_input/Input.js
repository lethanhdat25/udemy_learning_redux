import classes from "../Auth.module.css";
import React, {useImperativeHandle, useRef} from "react";

const Input = React.forwardRef((props,ref) => {
    const inputRef=useRef();
    const focus=()=>{
        inputRef.current.focus();
    }
    useImperativeHandle(ref,()=>{
        return{
            focus
        }
    })
    return (
        <div className={classes.control}>
            <label htmlFor={props.id}>{props.label}</label>
            <input ref={inputRef}  value={props.value} type={props.type||"text"} id={props.id} name={props.name} onBlur={props.onBlur}
                   onChange={props.onChange}/>
            {props.errors && props.touched ? <div>{props.errors}</div> : null}
        </div>
    )
});
export default Input;