import css from './Modal.module.css';
import React from "react";
import {createPortal} from "react-dom";
import {useDispatch} from "react-redux";
import {toogle} from "../../store/slices/ui";
const Backdrop=(props)=>{
    const dispacth=useDispatch();
    return <div className={css.backdrop} onClick={()=>dispacth(toogle())}/>
};
const ModalOverlay=(props)=>{
    return <div className={css.modal}>
        <div className={css.content}>{props.children}</div>
    </div>
};
const Modal =(props)=>{
    const portalElement=document.getElementById('modal');
    return createPortal(
        <>
            <Backdrop/>
            <ModalOverlay>{props.children}</ModalOverlay>
        </>
    ,portalElement)
};
export default Modal;