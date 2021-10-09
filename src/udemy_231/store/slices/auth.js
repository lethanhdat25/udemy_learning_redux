import {createSlice} from "@reduxjs/toolkit";

const initialState={
    isAuthenticated:false
}
const auth=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login(state,action){
            state.isAuthenticated=true;
        },
        logout(state,action){
            state.isAuthenticated=false;
        },
    }
});
export default auth.reducer;
export const {login,logout}=auth.actions;