import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    showCounter:true
}
const counter=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){

        },
        showCounter(state){
            state.showCounter = !state.showCounter
        }
    }
});
export default counter.reducer;
export const {increment,increase,decrement,showCounter}=counter.actions