import {createSlice} from "@reduxjs/toolkit";

const initialState={
    cartIsVisible:false
}
const ui=createSlice({
    name:"ui",
    initialState,
    reducers:{
        toogle:(state,action)=>{
            state.cartIsVisible=!state.cartIsVisible;
        }
    }
});
export default ui.reducer;
export const {toogle}=ui.actions;